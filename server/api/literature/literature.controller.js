'use strict';

var Literature = require('./literature.model');
var passport = require('passport');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');

var validationError = function(res, err) {
  return res.json(422, err);
};



/**
 * Creates a new Literature
 */
exports.create = function (req, res, next) {
  var newLiterature = new Literature(req.body);
  //newLiterature.provider = 'local';
  newLiterature.type = req.body.type;
  newLiterature.save(function(err, user) {
    if (err) return validationError(res, err);
  });
};

/**
 * Get a single Literature
 */
exports.show = function (req, res, next) {
  var userId = req.params.id;

  Literature.findById(userId, function (err, literature) {
    if (err) return next(err);
    if (!user) return res.send(401);
    res.json(literature.profile);
  });
};

/**
 * Deletes a Literature
 * restriction: 'admin'
 */
exports.destroy = function(req, res) {
  Literature.findByIdAndRemove(req.params.id, function(err, literature) {
    if(err) return res.send(500, err);
    return res.send(204);
  });
};



/*exports.findLit = function(req, res, next) {
  var lit = req.literature._id;
  Literature.findOne({
    _id: lit
  }, '-salt -hashedPassword', function(err, user) { // don't ever give out the password or salt
    if (err) return next(err);
    if (!user) return res.json(401);
    res.json(user);
  });
};
*/

/**
 * Authentication callback
 */
exports.authCallback = function(req, res, next) {
  res.redirect('/');
};
