var mongoose = require('mongoose');

var FeatureSchema = new mongoose.Schema({
  project_id: {
    type: String,
    required: true,
    unique: false
  },
  feature: {
    type: String,
    required: true,
    unique: true
  },
  impact: {
    type: Number,
    required: true,
    unique: true
  },
  effort: {
    type: Number,
    required: true,
    unique: true
  },
  quadrant: {
    type: Number,
    required: false,
    unique: false
  },
  is_mvp_feature: {
    type: Boolean,
    required: false,
    unique: false
  }
});

module.exports = mongoose.model('features', FeatureSchema);
