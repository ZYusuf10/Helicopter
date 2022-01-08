var createError = require('http-errors');
var express = require('express');
var path = require('path');
var compression = require('compression');

var indexRouter = require('./routes/index');


var app = express();

app.use(compression()); //Compress all routes

var indexRouter = require('./routes/index');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



//setup the database conenction
var mongoose = require('mongoose');
const mongoDb = "mongodb+srv://heli45:flyFar27@cluster0.hbcre.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

app.listen(3000, function () {
    console.log('zakariyeyusuf listening on port 3000.')
  })


module.exports = app;