const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();
var request = require('request');
require('dotenv').config();

const PORT = process.env.PORT || 4000;

app.connect({
	host: process.env.SLACK_WEBHOOK,
});

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './index.html'));
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

app.listen(PORT, () => {
	console.log(`Server is now listening on ${PORT}`);
});