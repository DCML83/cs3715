var express = require('express');
var router = express.Router();
var bodyParser=require('body-parser'); 
router.use(bodyParser.json()); 
var JsonFile = require('../data.json');
var fs = require("fs");

//Get content from file
var contents = fs.readFileSync("data.json");


var jsonContent = JSON.parse(contents);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('http://sc-6.cs.mun.ca/list/0');
	//
});

router.get('/:id', function(req, res, next) {
	var id = req.params.id;			
	res.render('friendList', {	title:	'Add friends', names:	jsonContent['friends'], person : 	jsonContent['friends'][id]	});
});


router.post('/addSpecific/:id', function(req, res) {
	var name = req.body.who;
	console.log(name);
	var id = req.params.id;
	console.log(id);
	for (var i=0; i<jsonContent.friends.length; i++){
		if((jsonContent.friends[i].name === name) && (jsonContent.friends[i].name != jsonContent.friends[id].name)){
			var obj = jsonContent.friends[i];
   			var copy = obj.constructor();
   		        for (var attr in obj) {
   				if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
   			}
			
			delete copy.friendList;
			jsonContent.friends[id].friendList.push(copy);
		}
	}
	console.log(jsonContent.friends);
	var data = JSON.stringify(jsonContent, null, 2);
	fs.writeFile('data.json', data , callback);
	function callback (err) {
		console.log("All set");
	}
	//res.render('friendList', { title: 'KIRRRRRRSSSS', names: jsonContent['friends'], person : jsonContent['friends'][id] });
	//res.redirect('http://sc-6.cs.mun.ca/list/'+id);
	res.redirect('back');
});

//router.get('/kirs', function(req, res, next) {
//  res.render('index', { title: 'KIRRRRRRRRSSSSSSSS' });
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

module.exports = router;
