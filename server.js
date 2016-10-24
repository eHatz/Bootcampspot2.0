const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();
const request = require('request');
const GitHubStrategy = require('passport-github').Strategy;
const passport = require('passport');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const express_session = require('express-session');
const ensureLogin = require('connect-ensure-login');
const sequelize = require('sequelize');
const models = require("./models");
const async = require("async");
require('dotenv').config();

//Express Setup
const PORT = process.env.PORT || 4000;
app.connect({
	host: process.env.SLACK_WEBHOOK,
});
app.use(express.static(__dirname + '/public'));
app.use("/static", express.static(__dirname + '/dist'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


//Passport setup
passport.use(new GitHubStrategy({
	clientID: process.env.GITHUB_CLIENT_ID,
	clientSecret: process.env.GITHUB_CLIENT_SECRET,
	callbackURL: process.env.CALLBACK_URL
}, function(accessToken, refreshToken, profile, cb) {
	return cb(null, profile);
}
));

/*
local: http://localhost:4000/login/github/return
prodution: http://bootcampspot2.herokuapp.com/login/github/return
*/

passport.serializeUser(function(user, cb) {
	cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
	cb(null, obj);
});

app.use(morgan('combined'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express_session({ secret: 'jennanda', resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

//Sequelize models
const User = models.User;
const Section = models.Section;
const Session = models.Session;
const Submission =models.Submission;
const Assignment = models.Assignment;
const Attendance = models.Attendance;

//Routes
app.get('/login', function(req, res){
	
	if (req.session.userInfo) {
		User.findOne({where: {Email: req.session.userInfo.emails[0].value}}).then(function(user){
			if (!user){
				res.setHeader('Content-Type', 'application/json');
		    	res.json({
		    		access: false,
		    		userData: false
		    	});
			}else if (user){
				user.getSections().then(function(section) {
					var userSection = section;
					if (user.Role === 'Admin') {
						userSection = 'Admin';
					};
					res.setHeader('Content-Type', 'application/json');
			    	res.json({
			    		access: 'jennanda',
			    		userData: user,
			    		userSection: userSection
			    	});
				})
			}
		});
	} else {
		res.setHeader('Content-Type', 'application/json');
    	res.json({
    		access: false,
    		userData: false
    	});
	}
});

app.get('/logout', function(req, res){
	req.session.userInfo = null;
	res.json({
		access: false,
	    userData: false
    });
});
app.get('/login/github', passport.authenticate('github'));

app.get('/login/github/return', 
    passport.authenticate('github', { failureRedirect: '/' }),
    function(req, res) {
    	req.session.userInfo = req.user;
        res.redirect('/#/login');
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './index.html'));
});

app.post('/admin/getUsers', function(req, res) {
	console.log('getusers', req.body);
	//sorting options
	function sortingAsc(sort, column) {
		if (req.body.sort === sort) {
			if (req.body.section !== 'all') {
				Section.findOne({where: {Title: req.body.section} })
				.then(function(dbSection) {
					dbSection.getUsers({order: [[column]]}).then(function(users) {
						console.log('SECTION USERS===========', users);
						res.json({users: users});
					})
				})
			} else {
				User.findAll({order: [[column]]}).then(function(users){
					res.json({users: users});
				})
			}
		}
	}

	function sortingDesc(sort, column) {
		if (req.body.sort === sort) {
			if (req.body.section !== 'all') {
				Section.findOne({where: {Title: req.body.section} })
				.then(function(dbSection) {
					dbSection.getUsers({order: [[column, 'DESC']]}).then(function(users) {
						res.json({users: users});
					})
				})
			} else {
				User.findAll({order: [[column, 'DESC']]}).then(function(users){
					res.json({users: users});
				})
			}
		}
	}
	sortingAsc('all', 'FirstName');
	sortingAsc('sort-nameAsc', 'FirstName');
	sortingAsc('sort-roleAsc', 'Role');
	sortingDesc('sort-roleDesc', 'Role');
	sortingDesc('sort-nameDesc', 'FirstName');
});

app.post('/admin/createUser', function(req, res) {

	User.create({
		FirstName: req.body.firstName,
		LastName: req.body.lastName,
		Email: req.body.email,
		Role: req.body.role
	}).then(function(newUser) {
		if (req.body.role !=='Admin') {
			Section.findOne({where: {Title: req.body.sectionTitle} })
			.then(function(section) {
				if (section) {
					newUser.addSection(section);
					res.json({status: 'User Created Successfully'});
				} else {
					res.json({status: 'User Creation Failed'});
				};
				
			});
			
		};
	});
});

app.post('/admin/getSections', function(req, res) {
	Section.findAll().then(function(section){
		res.json({section: section});
	});
});

app.post('/admin/createSection', function(req, res) {

	Section.create({
		Title: req.body.Title,
		Location: req.body.Location,
		SlackWebhook: req.body.SlackWebhook,
		SlackToken: req.body.SlackToken,
		StartDate: req.body.StartDate,
		EndDate: req.body.EndDate,
	}).then(function(section) {
		res.json({section:section});
	});
});

//====Attendance routes====
app.post("/attendance/getAllSessions", function(req, res){
	Session.findAll({
		where:{
			SectionId: req.body.section
		}
	}).then(function(sessions){
		console.log("/attendance/getAllSessions: ", sessions);
		res.json(sessions);
	})
})

app.post("/attendance/singleSession", function(req, res){
	const sessionId = req.body.sessionId;
	var responseArray = [];

	//Grab all Attendance instances that match the current class session
	Attendance.findAll({where:{SessionId:sessionId}}).then(function(attendanceResults){
		//For each Attendance instance...
		console.log("attendanceResults: ", attendanceResults)

		function recursiveEach(inputArray, i){
			if (i === inputArray.length){
				return res.send(responseArray);
			} 

			let thisItem = inputArray[i];

			User.findOne({where:{id:thisItem.UserId}}).then(function(user){
				responseArray.push({
					UserId: thisItem.UserId,
					Name: user.FirstName + " " + user.LastName,
					Date: thisItem.Date,
					Time: thisItem.Time,
					Status: thisItem.Status
				})
				return user;
			}).then(function(){
				i++
				console.log("array.push")
				recursiveEach(attendanceResults, i);
			})
		}

		recursiveEach(attendanceResults, 0);
	})
})

app.post("/attendance/singleStudent", function(req, res){
	// console.log("attendance/singleStudent route: ", req.body);
	const studentId = req.body.studentId;
	let responseArray = [];
	
	Attendance.findAll({where:{UserId:studentId}}).then(function(attendanceResults){

		function recursiveEach(inputArray, i){
			if (i === inputArray.length){
				return res.send(responseArray);
			} 

			let thisItem = inputArray[i];

			Session.findOne({where:{id:thisItem.SessionId}}).then(function(session){
				responseArray.push({
					id: thisItem.SessionId,
					Class: session.Subject,
					Date: thisItem.Date,
					Time: thisItem.Time,
					Status: thisItem.Status
				})
				return session;
			}).then(function(){
				i++
				console.log("array.push")
				recursiveEach(attendanceResults, i);
			})
		}

		recursiveEach(attendanceResults, 0);
	})
})


app.post("/attendance/getTeacherSections", function(req, res){
	var responseObj = {};
	Section.findAll({
		include: [{
			model: User,
			where: {id: req.body.id}
		}]
	}).then(function(sections){
		responseObj.sections = sections;
		return sections
	 }).then(function(sections){
		return Session.findAll({
			where:{
				SectionId: sections[0].id
			}
		})
	 }).then(function(sessions){
	 	responseObj.sessions = sessions;
	 	console.log("responseObj before: ", responseObj);
	 	return responseObj;
	 }).then(function(responseObj){
	 	console.log("responseObj after: ", responseObj);
	 	res.json(responseObj)
	 })
})
app.post('/createAnnouncement', function(req, res) {
	Section.findOne({where: {Title: req.body.sectionTitle} }).then(function(section) {
		section.createAnnouncement({
			Title: req.body.title, 
			Content: req.body.message,
		})
		.then(function(assignment) {
			request.post({
				headers: {'content-type' : 'application/x-www-form-urlencoded'},
				url: section.SlackWebhook,
				body: JSON.stringify({
					'channel': '#' + req.body.channel,
					'username': 'Announcements', 
					'text': req.body.title+':\n'+ req.body.message
				})
			});
			res.json({assignment: assignment});
		});
	});
});
app.post('/getSlackChannels', function(req, res) {
	Section.findOne({where: {Title: req.body.sectionTitle} }).then(function(section) {
		request.post({
			headers: {'content-type' : 'application/x-www-form-urlencoded'},
			url: 'https://slack.com/api/channels.list?token=' + section.SlackToken}, 
		function(error, response, body){
			res.json({channels: (JSON.parse(body)).channels});
		});
	});
});
//====Assignment Routes ==================
app.post('/getAssignments', function(req, res) {
	Section.findOne({where: {Title: req.body.sectionTitle} }).then(function(section) {
		section.getAssignments().then(function(assignments) {
			res.json(assignments);
		});
	});
});

app.post('/createAssignment', function(req, res) {
	Section.findOne({where: {Title: req.body.sectionTitle} }).then(function(section) {
		section.createAssignment({
			Title: req.body.Title, 
			Instructions: req.body.Instructions,
			DueDate: req.body.DueDate,
			DueTime: req.body.DueTime, 
			Resources:req.body.Instructions,
			Type:req.body.Type
		})
		.then(function(assignment) {
			res.json({assignment: assignment});
		});
	});
});

app.post('/viewSubmission', function(req, res) {
	const UserId = req.body.UserId;
	const assignmentId = req.body.assignmentId;
	Assignment.findOne({where: {id: assignmentId} })
	.then(function(assignment) {
		assignment.getSubmissions({where: {UserId: UserId}})
		.then(function(submission) {
			res.json({studentSubmission: submission, assignment: assignment});
		});
	});
});

app.post('/viewAllSubmissions', function(req, res) {
	const UserInfo = req.body.UserInfo;
	const assignmentId = req.body.assignmentId;
	Assignment.findOne({where: {id: assignmentId} })
	.then(function(assignment) {
		assignment.getSection().then(function(section) {
			section.getUsers().then(function(users) {
				assignment.getSubmissions()
				.then(function(submission) {
					var index = 0;
					var userSubArr = [];
					var userNoArr = users;
					function getUsers(index) {
						if (index === submission.length) {
							return res.json({
								submissions: submission,
								usersSubmitted: userSubArr,
								usersNoSubmitted: userNoArr,
								assignment: assignment
							});
						};
						for (var i = 0; i < userNoArr.length; i++) {
							if (userNoArr[i].id === submission[index].UserId) {
								var singleUser = userNoArr.splice(i,1);
								userSubArr.push({user: singleUser[0], submission: submission[index]});
							}
						}
						index++;
						return getUsers(index);
					};
					getUsers(index);
				});
			});
		});
	});
});

app.post('/submitAssignment', function(req, res) {
	const assignmentLinks = req.body.assignmentLinks;
	const userId = req.body.userId;
	const assignmentId = req.body.assignmentId;
	Assignment.findOne({where: {id: assignmentId} })
	.then(function(assignment) {
		var submitStatus;
		if (new Date().getTime() > assignment.Due) {
			submitStatus = 'Late';
		} else if(new Date().getTime() < assignment.Due) {
			submitStatus = 'Early';
		} else {
			submitStatus = 'On Time';
		}
		User.findOne({where: {id: userId}}).then(function(user) {
			assignment.createSubmission({Submission: assignmentLinks, Status: submitStatus})
			.then(function(submit){
				user.addSubmission(submit);
				res.json(submit);
			})
		});
	});
});

app.post('/gradeSubmitView', function(req, res) {
	const studentId = req.body.studentId;
	const UserId = req.body.UserId;
	const assignmentId = req.body.assignmentId;
	Assignment.findOne({where: {id: assignmentId} })
	.then(function(assignment) {
		assignment.getSubmissions({where: {UserId: studentId} })
		.then(function(submission) {
			User.findOne({where: {id: studentId} }).then(function(user) {
				res.json({studentSubmission: submission, student: user, assignment: assignment});
			});
		});
	});
});
app.post('/gradeAssignment', function(req, res) {
	//heroku had a problem with deconstruction apparently...
	const graderName = req.body.graderName;
	const assignmentName = req.body.assignmentName;
	const assignmentId = req.body.assignmentId;
	const submissionId = req.body.submissionId;
	const notes = req.body.notes;
	const studentName = req.body.studentName;
	const grade = req.body.grade;
	Submission.findOne({where: {id: submissionId} })
	.then(function(submission) {
		submission.update({Notes: notes, Grade: grade})
		.then(function(updated) {
			Assignment.findOne({where: {id: assignmentId} }).then(function(assignment) {
				assignment.getSection().then(function(section) {
					//get list of slack users
					request.post({
						headers: {'content-type' : 'application/x-www-form-urlencoded'},
						url: 'https://slack.com/api/users.list?token=' + section.SlackToken}, 
					function(error, response, body){
						var slackUsers = JSON.parse(body).members;
						// if student's name is in slack channel, send them a message
						for (var i = 0; i < slackUsers.length; i++) {
							if (slackUsers[i].real_name.toLowerCase() === studentName.toLowerCase()) {
								request.post({
									headers: {'content-type' : 'application/x-www-form-urlencoded'},
									url: section.SlackWebhook,
									body: JSON.stringify({
										'channel': '@' + slackUsers[i].name,
										'username': graderName, 
										'text': 'Hey ' + studentName + ', you got a/an ' 
											+ grade + ' on ' + assignmentName + '. ' + notes, 
										'icon_emoji': ':ghost:'
									})
								});
							}
						}
					});
					res.json({updatedSub: updated});
				});
			});
		});
	});

})

//====Slack Routes====

app.get("/slack", (req, res) => {
	res.sendFile(path.join(__dirname, './slack.html'));
});

app.get("/getSlackNames", (req, res) => {
	request.post({
		headers: {'content-type' : 'application/x-www-form-urlencoded'},
		url: process.env.SLACK_GET_USERS}, 
	function(error, response, body){
		res.json((JSON.parse(body).members[0].real_name)); //name is username
	});
})

app.post('/slack', (req, res) => {
	request.post({
		headers: {'content-type' : 'application/x-www-form-urlencoded'},
		url: process.env.SLACK_WEBHOOK,
		body: JSON.stringify({
			'channel': req.body.channel, 
			'username': 'webhookbot', 
			'text': req.body.message, 
			'icon_emoji': ':ghost:'
		})
	}, function(error, response, body){
		if (error) {
			res.json({slack: 'Message Failed'});
			return;
		};
		res.json({slack: 'Message Sent'});
	});
});

//Sequelize
models.sequelize.sync();


app.listen(PORT, () => {
	console.log(`Server is now listening on ${PORT}`);
});