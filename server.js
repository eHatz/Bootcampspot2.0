//External dependencies
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
require('dotenv').config();


//Express setup
const PORT = process.env.PORT || 4000;

app.connect({
	host: process.env.SLACK_WEBHOOK,
});

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


//Passport setup
passport.use(new GitHubStrategy({
	clientID: process.env.GITHUB_CLIENT_ID,
	clientSecret: process.env.GITHUB_CLIENT_SECRET,
	callbackURL: "http://localhost:4000/login/github/return"
}, function(accessToken, refreshToken, profile, cb) {
	return cb(null, profile);
}
));

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


//Routes
app.get('/login', function(req, res){
	console.log('=============================LOGIN GET=============================================');
    //res.setHeader('Content-Type', 'application/json');
    res.json((req.user));
});

app.get('/', (req, res) => {
	console.log('HELOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
	res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/login/github', passport.authenticate('github'));

app.get('/login/github/return', 
    passport.authenticate('github', { failureRedirect: '/' }),
    function(req, res) {
        res.redirect('/');
});

app.get('/loggedin',
    ensureLogin.ensureLoggedIn(),
    function(req, res){
    	console.log('==========================================================================');
    	console.log(req.user);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(req.user));
});


app.get("/slack", (req, res) => {
	res.sendFile(path.join(__dirname, './slack.html'));
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
		console.log(body);
	});
})

//Listener
app.listen(PORT, () => {
	console.log(`Server is now listening on ${PORT}`);
});