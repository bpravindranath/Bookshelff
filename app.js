
const opn = require('opn');


var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var MongoStore = require('connect-mongo')(session);
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Bookshelff', { useMongoClient: true });

// require('./app_api/models/login'); 
require('./app_api/models/db'); //starts my mongo db


//Routes for APP_SERVER
var index = require('./app_server/routes/index');
var users = require('./app_server/routes/users');

// config for passport 
// require('./app_api/config/passport');

//Routes for REST API
var routesApi = require('./app_api/routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


//Static Folder for stuff publically available to browser
app.use(express.static(path.join(__dirname, 'public')));

//BodyParser and CookieParse Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express Session
app.use(session({
  secret: 'secretsessionkey',
  resave: true,
  saveUninitialized: true,
 store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

// // Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
errorFormatter: function(param, msg, value) {
    var namespace = param.split('.')
    , root    = namespace.shift()
    , formParam = root;

  while(namespace.length) {
    formParam += '[' + namespace.shift() + ']';
  }
  return {
    param : formParam,
    msg   : msg,
    value : value
  };
}
}));


// Connect Flash
app.use(flash());


// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error'); //for passport
  res.locals.user = req.user || null;
  next();
});

// When to use routes
app.use('/', index);
app.use('/users', users);

app.use('/api', routesApi);

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



opn('http://localhost:3000/');
module.exports = app;
