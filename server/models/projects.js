var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  pitch: {
    type: String,
    required: false,
    unique: false
  },
  owner_id: {
    type: String,
    required: true,
    unique: false
  }
});

module.exports = mongoose.model('projects', ProjectSchema);
