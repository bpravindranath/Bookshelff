var request = require('request');

// var apiOptions = {
//     server : "http://localhost:3000"
// };



var renderRegister = function(req, res){
    
    
        res.render('register',{
    
            title: 'Register'
    
        });
    };
    
    module.exports.register = function(req,res){
        renderRegister(req,res);
    
        
    };




var renderLogin = function(req, res){


    res.render('login',{

        title: 'Login'

    });
};

module.exports.login = function(req,res){
    renderLogin(req,res);

    // res.render('login', {
    //     title: 'Login'
    // });
};
