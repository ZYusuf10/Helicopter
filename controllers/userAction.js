


var async = require('async');

//get models
var User = require('../models/Users');
//display homePage
exports.homeGet = function(req, res){
    res.render('home', {title: 'Login or Signup to play the helicopter game'});
};
exports.signUpGet = function(req, res){
    res.render('signUpGet', {title: ''});
};
//post: make new user and redirect to login
exports.signUpPost = function(req, res, next){
    //process requst
    let user = new User({
        username: req.body.username,
        password: req.body.password,
    }).save(err => {
        if(err){
            return next(err);
        }
        res.render('loginGet', {title:'Login with the new account'});
    });
    
};

exports.loginGet = function(req, res){
    res.render('loginGet', {title: ''});
};
exports.loginPost = function(req, res, next){
    User.findOne({ username: req.body.username }, (err, user) => {
        if (err) { 
            return res.render('loginGet', {title:'Try again'});
        };
        if (!user) {
            return res.render('loginGet', {title:'wrong user'});
        }
        if (user.password !== req.body.password) {
            return res.render('loginGet', {title:'wrong password'});
        }
        return res.render('game', {title:'Helicopter game'});
      });
};
