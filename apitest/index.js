const express = require('express');

app = express();
var jsonData = { 'Name':'Bob Saget', 'Age':30};

app.get('/', function(req,res) {
	res.send('<h1>Hello World</h1>');
});

app.get('/data', function(req,res) {
	jsonData = {"Name":"Bob Saget", "Age": 30};
	res.set('Content-Type', 'text/json');
	res.status(200).send(jsonData);
});

var port = 3030;

app.listen(port, function() { console.log('Server Started on port 3030...');});