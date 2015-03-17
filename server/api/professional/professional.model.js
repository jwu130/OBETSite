'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProfessionalSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Professional', ProfessionalSchema);