var request = require('request');

var User = require('../../app_api/models/login');

var apiOptions = {
    server : "http://localhost:3000"
  };

                                        // Register Controller


                                        

// Controller For GET Request
module.exports.register = function(req,res){
        renderRegister(req,res);
    
 };

 var renderRegister = function(req, res){
    
    
    res.render('register',{

        title: 'Register'

    });
};


// Controller for POST Request

module.exports.registerAdd =  function (req, res){
   
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2; 

    req.checkBody('firstname', 'First Name is Required').notEmpty();
    req.checkBody('lastname', 'Last Name is Required').notEmpty();
    req.checkBody('email', 'Email is Required').notEmpty();
    req.checkBody('email', 'Email is not Valid').isEmail();
    req.checkBody('username', 'Username is Required').notEmpty();
    req.checkBody('password', 'Password is Required').notEmpty();
    req.checkBody('password2', 'Password does not Match').equals(req.body.password);

    var errors = req.validationErrors();


    if(errors){
        res.render('register', {
            errors: errors
        });

    } else {
       
        var newUser = new User({
            FirstName: firstname,
            LastName: lastname,
            Email: email,
            Username: username,
            Password: password
        })


        //TODO make more MVC take this function out of model and put into API controller
        User.createUser(newUser, function(err, user){

            if(err) throw err;
            console.log(user);
        });

        req.flash('success_msg', 'You are Registered and Can Now Login');
        res.redirect('login');

        // requestOptions = {
        //     url : apiOptions.server + path,
        //     method: "POST",
        //     json : postData
        // };


    }
};



                                    // Register Controller

// Controller For GET Request  

module.exports.login = function(req,res){
    renderLogin(req,res);
};

var renderLogin = function(req, res){

    res.render('login',{

        title: 'Login'

    });
};

// Controller for POST Request
module.exports.loginAdd =  function (reg, res){

};