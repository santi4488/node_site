var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var comic_characters = require('./routes/comic_character_routes');
var ice_and_fire = require('./routes/ice_and_fire_routes');

var app = express();

// view engine setup
var views = [path.join(__dirname, 'views')];
views.push(path.join(__dirname, './app_modules/comic_characters/views'));
views.push(path.join(__dirname, './app_modules/ice_and_fire/views'));
// views.push(path.join(__dirname, './app_modules/comic_characters/views'));
app.set('views', views);
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, './app_modules/ice_and_fire/public')));
app.use(express.static(path.join(__dirname, './app_modules/comic_characters/public')));

app.use('/', routes);
app.use('/comic_characters', comic_characters);
app.use('/ice_and_fire', ice_and_fire);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
