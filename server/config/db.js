var mongoose = require('mongoose');
var connection = mongoose.connection;

var uri = process.env.MONGODB_URI;
var options = {
  user: process.env.MONGODB_SCOPEHERO_USER,
  password: process.env.MONGODB_SCOPEHERO_PWD
};

mongoose.connect(uri, options);

connection.on('error', console.error.bind(console, 'MongoDB Error: '));
connection.once('open', function () {
  console.log('MongoDB connection established successfully!');
  console.log('MongoDB Using Database: ', connection.db.s.databaseName);
});
