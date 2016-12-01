var express = require('express');
var router = express.Router();
 
var JsonFile = require('../data.json');
var fs = require("fs");

//Get content from file
var contents = fs.readFileSync("data.json");


var jsonContent = JSON.parse(contents);

router.get('/', function(req, res, next) {
	res.render('index', {people:	jsonContent['friends']});
	
});



//router.get('/signup', function(req, res, next) {
 // res.render('signup', { title: 'Express' });
//});
//router.post('/signup', function(req, res, next) {

//data retrieval
//var username =req.body.username;
//var password =req.body.password;
//rest of the logic
 // res.render('signup', { title: 'Express' });
//  req.redirect('/');
//});

module.exports = router;
