var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bookManagementRouter = require('./routes/bookManagement');
var studentRouter = require('./routes/student');
var borrowBookRouter =require('./routes/borrowBook');
var authorizationRouter = require('./routes/Authorization')

var cors = require('cors');


//-------------------MongoDB Operations---------------------
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Library');

mongoose.connection.on('connected', () => {
    console.log("Connected to Database");

})

mongoose.connection.on('error', (err) => {
    console.log("Error connecting Database");

})


//----------------mongo-----------------------------------



var app = express();
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', usersRouter);
app.use('/student', studentRouter);
app.use('/book', bookManagementRouter);
app.use('/bookBorrow',borrowBookRouter);
app.use('/auth',authorizationRouter);
app.use('*', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

app.listen(3000);
console.log("server started at 3000 port");

module.exports = app;
