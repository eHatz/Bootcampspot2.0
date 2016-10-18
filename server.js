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
const User = models.User;
const Section = models.Section;
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
						res.json(users);
					})
				})
			} else {
				User.findAll({order: [[column]]}).then(function(users){
					res.json(users);
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
						console.log('SECTION USERS===========', users);
						res.json(users);
					})
				})
			} else {
				User.findAll({order: [[column, 'DESC']]}).then(function(users){
					res.json(users);
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
			console.log('REQ.BODY.SECTION', req.body.sectionTitle)
			Section.findOne({where: {Title: req.body.sectionTitle} })
			.then(function(section) {
				console.log('THIS SECTION', section);
				newUser.addSection(section);
			})
			
		};
	});
});

app.post('/admin/getSections', function(req, res) {
	Section.findAll().then(function(section){
		res.json(section);
	});
});

app.post('/admin/createSection', function(req, res) {

	Section.create({
		Title: req.body.Title,
		Location: req.body.Location,
		Slack: req.body.Slack,
		StartDate: req.body.StartDate,
		EndDate: req.body.EndDate,
	})
});

app.post('/getAssignments', function(req, res) {
	console.log('OUTSIDE SECTION!!!!!!!!!!!!!!!!!!', req.body.sectionTitle);
	Section.findOne({where: {Title: req.body.sectionTitle} }).then(function(section) {
		section.getAssignments().then(function(assignments) {
			console.log('INSIDE SECTION!!!!!!!!!!!!!!!!!!', assignments);

			res.json(assignments);
		});
	});
});

app.post('/createAssignment', function(req, res) {
	Section.findOne({where: {Title: req.body.sectionTitle} }).then(function(section) {
		section.createAssignment({
			Title: req.body.Title, 
			Instructions: req.body.Instructions,
			Due: req.body.Due, 
			Resources:req.body.Instructions
		})
	})
});

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

//Teacher attendance route


//Sequelize
models.sequelize.sync();


app.listen(PORT, () => {
	console.log(`Server is now listening on ${PORT}`);
});