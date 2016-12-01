var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./routes/index');
var users = require('./routes/users');
var fList = require('./routes/friendList');
var location = require('./routes/location');
var dbRouter = require('./routes/dbRoute');
var profile = require('./routes/profile');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var fs = require("fs");




app.locals.testData = require('./data.json');

var port = 3336;

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.set('views', './views');
app.set('view engine','ejs');

app.use(logger('dev'));
app.use(cookieParser());
app.use('/',index);
app.use('/users',users);
app.use('/list', fList);
app.use('/map', location);
app.use('/Db', dbRouter);
app.use('/profile', profile);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;


app.listen(port, function(err){
	console.log('The server is running on port: '+ port);
});
