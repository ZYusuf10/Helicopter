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
//serve static data
app.use(express.static('public'));

app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



//setup the database conenction
var mongoose = require('mongoose');
var devUrl = "mongodb+srv://heli45:flyFar27@cluster0.hbcre.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var mongoDb = process.env.mongoDB_URI || devUrl;
mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

app.listen(process.env.PORT || 8080, function () {
    console.log('zakariyeyusuf listening on port 8080.')
  })


module.exports = app;