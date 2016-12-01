var express = require('express');
var ProRouter = express.Router();
var JsonFile = require('../data.json');
var fs = require("fs");

//Get content from file
var contents = fs.readFileSync("data.json");


var jsonContent = JSON.parse(contents);


/* GET home page. */
ProRouter.get('/', function (req, res, next) {
	res.redirect('http://sc-6.cs.mun.ca/profile/0');
});

ProRouter.get('/:id', function(req, res, next) {
	var id = req.params.id
	//for (var i=0; i<JsonFile['friends'].length; i++){
		//if(JsonFile['friends'][i].name === name){
			res.render('profile', { people: jsonContent['friends'][id]}); 

  //}; }
	});


/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});


//ProRouter.get('/:id', function(req, res, next) {
//	var id = req.params.id;
//	res.render('profile', {people : peopleData[id] });
	
//});

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

module.exports = ProRouter;




