var express = require('express');
var router = express.Router();
var User = require('../models/UsersN');
//get controllers(
var userAction = require('../controllers/userAction');
/* GET home page. */
router.get('/',userAction.homeGet);

/*Sign Up */
router.get('/signUpGet', userAction.signUpGet);
router.post('/signUpPost', userAction.signUpPost);
/*login */
router.get('/loginGet', userAction.loginGet);
router.post('/loginPost', userAction.loginPost);

module.exports = router;
