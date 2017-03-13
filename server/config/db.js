var mongoose = require('mongoose');
var connection = mongoose.connection;

mongoose.connect(process.env.MONGODB_URI);

connection.on('error', console.error.bind(console, 'MongoDB Error: '));
connection.once('open', function () {
  console.log('MongoDB connection established successfully!');
  console.log('MongoDB Using Database: ', connection.db.s.databaseName);
});
