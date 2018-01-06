var mongoose = require( 'mongoose' );

var bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema ({

	FirstName: {type: String, required: true},
	LastName: {type: String, required: true},
	Email: {type: String, required: true},
	Username: {type: String, required: true, index: true},
	Password: {type: String, required: true},
	

});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.Password, salt, function(err, hash) {
	        newUser.Password = hash;
	        newUser.save(callback);
	    });
	});
}

module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}