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
		Slack: req.body.Slack,
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



/*

============
app.post("/attendance/singleSession", function(req, res){
	const sessionId = req.body.sessionId;
	var responseArray = [];

	//Grab all Attendance instances that match the current class session
	Attendance.findAll({where:{SessionId:sessionId}})
		.then(function(attendanceResults){
			//For each Attendance instance...
			console.log("attendanceResults: ", attendanceResults)
			attendanceResults.forEach(function(attendanceInstance){
						//Package all this information in a tidy object
				responseArray.push({
					UserId: attendanceInstance.UserId,
					Name: "",
					Date: attendanceInstance.Date,
					Time: attendanceInstance.Time,
					Status: attendanceInstance.Status
				})
			})
			return responseArray;
		})
		.then(function(responseArray){
			console.log("responseArray forEach start")
			responseArray.forEach(function(arrayItem){
				const ID = arrayItem.UserId;
				User.findOne({where:{id:ID}})
					.then(function(user){
						arrayItem.Name = user.FirstName + " " + user.LastName
					})
			})
			console.log("responseArray: ", responseArray)
			return responseArray;
		})
		.then((responseArray) => res.send(responseArray))
})

==============

app.post("/attendance/singleSession", function(req, res){
	const sessionId = req.body.sessionId;
	console.log("sessionId: ", sessionId)
	var sectionId;
	var thisSession;
	var responseArray = [];

	Session.findOne({where:{id: sessionId}})
		.then((session) => {
			console.log("server 221: ", session);
			//Find the session and its associated section Id in the DB, and hold them in variables
			thisSession = session;
			sectionId = session.SectionId;
			return sectionId;
		}).then((sectionId) =>
			//Grab the associated section from the DB;
			Section.findOne({where:{id: sectionId}})
		).then((section) =>
			//Get all students for this section... 
			section.getUsers({where:{Role: "Student"}})
		).then((users) =>
			//...and save them to our response array
			users.forEach((user) =>
				responseArray.push({
					UserId: user.id,
					Name: user.FirstName + " " + user.LastName,
					Date: thisSession.Date,
					Time: "---",
					Status: "Absent"
				})
			)
		).then(() =>
			//Get all students who have registered their attendance for the session 
			thisSession.getUsers()
		).then((sessionAttendance) => {
			//Compare to the students in our responseArray
				sessionAttendance.forEach(function(attendanceInstance){
					responseArray.forEach(function(responseUser){
						//Once we match an attendance instance with the corresponding student...
						if(attendanceInstance.UserId === responseUser.id){
							//...if the the student created this attendanceInstance before the start of class...
							if(attendanceInstance.createdAt <= thisSession.Date){
								//Mark this student as early
								return responseUser.Status = "Early";
							} else {
								//Otherwise, the student was late
								return responseUser.Status = "Late";
							}			
						}
						//Unmatched students never registered their attendance, and therefore remain "Absent"
					})
				})
				console.log("/attendance/singleSession: ", responseArray);
			return responseArray;
		}).then((responseArray) => res.send(responseArray))
})


app.post("/attendance/singleStudent", function(req, res){
	// console.log("attendance/singleStudent route: ", req.body);
	const studentId = req.body.studentId;
	var responseArray = [];
	var thisStudent;

	//Find the current student in the DB
	User.findOne({where:{id:studentId}})
		.then(function(student){
			//Find the student's associated section
			thisStudent = student;
			return thisStudent.getSections()
		})
		.then(function(section){
			//Find all the sessions in the student's section
			const SectionId = section[0].id;
			return Session.findAll({where:{SectionId: SectionId}})
		}).then(function(sessions){
			//Make an attendance entry withing our response array for every class session
			sessions.forEach(function(session){
				responseArray.push({
					SessionId: session.id,
					Class: session.Subject,
					Date: session.Date,
					Time: "",
					Status: "Absent"
				})
			})
			return responseArray;
		}).then(function(){
			//Find all sessions for which student registered attendance (in the Attendance Table)
			return thisStudent.getSessions()
		}).then(function(sessions){
			console.log("sessions: ", sessions)
			//If the student registered attendance, switch that session's status from "absent" to "early" or "late"
			sessions.forEach(function(attendanceInstance){
				responseArray.forEach(function(responseSession){
					//If an attendance instance matches a session in responseArray...
					if (attendanceInstance.id === responseSession.SessionId){
						//... mark the student early if the datetime for the Attendance instance is earlier than the datetime currently held in response array (which is the start time for that particular session)
						if (attendanceInstance.Date <= responseSession.Date){
							responseSession.Date = attendanceInstance.Date;
							responseSession.Status = "Early";
						} else{
							responseSession.Date = attendanceInstance.Date;
							responseSession.Status = "Late";
						}
					}
				})
			})
			return responseArray;
		}).then(function(responseArray){
			res.send(responseArray)
		})
})
*/


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
		section.getUsers().then(function(users) {
			console.log('CREATE ASSIGNMENT', users);
		});
		section.createAssignment({
			Title: req.body.Title, 
			Instructions: req.body.Instructions,
			Due: req.body.Due, 
			Resources:req.body.Instructions
		}).then(function(assignment) {
			res.json({assignment: assignment});
		});
	});
});

app.post('/viewSubmission', function(req, res) {
	const UserInfo = req.body.UserInfo;
	const assignmentId = req.body.assignmentId;
	Assignment.findOne({where: {id: assignmentId} })
	.then(function(assignment) {
		assignment.getUsers({where: {Email: UserInfo.UserInfo.Email}})
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
		assignment.getUsers()
		.then(function(submission) {
			res.json({studentSubmission: submission, assignment: assignment});
		});
	});
});

app.post('/submitAssignment', function(req, res) {
	const assignmentLinks = req.body.assignmentLinks;
	const UserInfo = req.body.UserInfo;
	const assignmentId = req.body.assignmentId;
	Assignment.findOne({where: {id: assignmentId} })
	.then(function(assignment) {
		User.findOne({where: {Email: userInfo.UserInfo.Email}}).then(function(user) {
			assignment.addUser(user, {Submission: assignmentLinks}).then(function(user){
				res.json({success: user});
			})
		});
	});
});



//====Slack Routes====

app.get("/slack", (req, res) => {
	res.sendFile(path.join(__dirname, './slack.html'));
});

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
	});
});

//Sequelize
models.sequelize.sync();


app.listen(PORT, () => {
	console.log(`Server is now listening on ${PORT}`);
});