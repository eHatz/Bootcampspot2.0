const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(PORT, () => {
	console.log(`Server is now listening on ${PORT}`);
});