var express = require('express');
var dbRouter = express.Router();

//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

var peopleData = [ {
			name: 'Michael',
			profileP: './imgs/kris.gif',
			info: 'Dgrus, coffee',
			position: 'Somewhere',
			friendList: [	{name: 'lalo',
					profileP: './imgs/kris.gif',
					info: 'Drinking coffee',
					position: 'Somewhere',
					friendList: { },
					},
					{
					name: 'paul',
					profileP: './imgs/kris.gif',
					info: 'Furry nasty stuff',
					position: 'Somewhere',
					friendList: { },

				},
				{name: 'lalo',
					profileP: './imgs/kris.gif',
					info: 'Drinking coffee',
					position: 'Somewhere',
					friendList: { },
					},
					{
					name: 'paul',
					profileP: './imgs/kris.gif',
					info: 'Furry nasty stuff',
					position: 'Somewhere',
					friendList: { },

				}  ],
			},
			
{
			name: 'lalo',
			profileP: './imgs/kris.gif',
			info: 'Drinking coffee',
			position: 'Somewhere',
			friendList: [{name: 'lalo',
					profileP: './imgs/kris.gif',
					info: 'Drinking coffee',
					position: 'Somewhere',
					friendList: { },
					},
					{
					name: 'paul',
					profileP: './imgs/kris.gif',
					info: 'Furry nasty stuff',
					position: 'Somewhere',
					friendList: { },
				
			}],
			},
{
			name: 'paul',
			profileP: './imgs/kris.gif',
			info: 'Furry nasty stuff',
			position: 'Somewhere',
			friendList: { },
			},
{
			name: 'lololol',
			profileP: './imgs/kris.gif',
			info: 'Drinking coffee',
			position: 'Somewhere',
			friendList: { },
			},
{
			name: 'Michael',
			profileP: './imgs/kris.gif',
			info: 'Drinking coffee',
			position: 'Somewhere',
			friendList: { },
			}
];

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});
dbRouter.route('/AddEventData')
	.get(function(req,res){
		//res.send('Succesful route test!');
		var url = 'mongodb://localhost:27017/myApp';
		MongoClient.connect(url, function(err, db) {
			var collection = db.collection('friends');
			collection.insertMany(peopleData, function(err,results){
				res.send(results);
				db.close();
			});
		});

		

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

//MongoClient.connect(url, function (err, db) {
//		  if (err) {
//		    console.log('Unable to connect to the mongoDB server. Error:', err);
//		  } else {
//		    //HURRAY!! We are connected. :)
//		    console.log('Connection established to', url);
//	
  //  		// do some work here with the database.
	//	    //Close connection
	  //  db.close();
		//  }

module.exports = dbRouter;
