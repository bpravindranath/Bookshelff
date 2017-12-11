
var mongoose = require( 'mongoose' );


mongoose.connect('mongodb://localhost/Bookshelff', { useMongoClient: true })


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose connected to mongodb://localhost/Bookshelff');
});
db.on('disconnected', function () {
  console.log('Mongoose disconnected');
});


gracefulShutdown = function (msg, callback) {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};

// For app termination
process.on('SIGINT', function() {
  gracefulShutdown('app termination', function () {
    process.exit(0);
}); });



require('./resourceList');
// require('./login');

