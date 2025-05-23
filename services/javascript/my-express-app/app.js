var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var models = require("./db")

models.sequelize.sync({ force: true })
    .then(() => {
      console.log('Database & tables created successfully');

      // You can now proceed to create a new instance of the `PersonSchema` model
      // For example:
      return models.PersonSchema.create({
        name: 'John',
        surname: 'Doe',
        job: 'Software Developer'
      });
    })
    .then(() => {
      console.log('Person created successfully');
    })
    .catch((error) => {
      console.error('Error during table creation:', error);
    });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var helloRouter = require('./routes/hello');
var personRouter = require('./routes/person');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hello', helloRouter);
app.use('/person', personRouter);

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

module.exports = app;