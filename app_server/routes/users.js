var express = require('express');
var router = express.Router();
var ctrlLogging = require('../controllers/userLogin');



router.post('/register', ctrlLogging.registerAdd);

router.get('/register', ctrlLogging.register);



                //Login Route

//Get
router.get('/login', ctrlLogging.login);

//Post
router.post('/login', ctrlLogging.loginAdd);

module.exports = router;
