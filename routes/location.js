var express = require('express');
var router = express.Router();

var JsonFile = require('../data.json');
var fs = require("fs");

//Get content from file
var contents = fs.readFileSync("data.json");


var jsonContent = JSON.parse(contents);
router.get('/', function(req, res, next) {
	res.redirect('http://sc-6.cs.mun.ca/map/0');
});
/* GET home page. */
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  res.render('location', { title: 'Express', people: jsonContent['friends'] , person: jsonContent['friends'][id] });
});
router.post('/update/:id', function(req, res) {
	var lat = req.body.lat;
	var long = req.body.long;
	var id = req.params.id;
	console.log(id);
	
	jsonContent.friends[id].Lat = lat;
	jsonContent.friends[id].Long = long;
	
	console.log(jsonContent.friends);
	var data = JSON.stringify(jsonContent, null, 2);
	fs.writeFile('data.json', data , callback);
	function callback (err) {
		console.log("All set");
	}
	
	res.redirect('back');
});

module.exports = router;
