var express = require('express');
var router = express.Router();

var ctrlLogging = require('../controllers/userLogin');


//Register
router.get('/register', ctrlLogging.register);

//Login
router.get('/login', ctrlLogging.login);


module.exports = router;
