var mongoose = require('mongoose');

var FeatureSchema = new mongoose.Schema({
  feature: {
    type: String,
    required: true,
    unique: true
  },
  area: {
    type: String,
    required: false,
    unique: false
  },
  category: {
    type: String,
    required: false,
    unique: false
  },
  impact: {
    type: Number,
    required: true,
    unique: false
  },
  effort: {
    type: Number,
    required: true,
    unique: false
  },
  quadrant: {
    type: Number,
    required: false,
    unique: false
  }
});

module.exports = mongoose.model('features', FeatureSchema);
