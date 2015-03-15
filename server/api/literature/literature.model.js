'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LiteratureSchema = new Schema({
  type: String,
  title: String

  
});

/**
 * Virtuals
 */

// Public profile information
LiteratureSchema
  .virtual('profile')
  .get(function() {
    return {
      'type': this.name,
      'role': this.role
    };
  });


/**
 * Methods
 */
LiteratureSchema.methods = {
  
};

module.exports = mongoose.model('Literature', LiteratureSchema);
