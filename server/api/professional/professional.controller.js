'use strict';

var _ = require('lodash');
var Professional = require('./professional.model');

// Get list of professionals
exports.index = function(req, res) {
  Professional.find(function (err, professionals) {
    if(err) { return handleError(res, err); }
    return res.json(200, professionals);
  });
};

// Get a single professional
exports.show = function(req, res) {
  Professional.findById(req.params.id, function (err, professional) {
    if(err) { return handleError(res, err); }
    if(!professional) { return res.send(404); }
    return res.json(professional);
  });
};

// Creates a new professional in the DB.
exports.create = function(req, res) {
  Professional.create(req.body, function(err, professional) {
    if(err) { return handleError(res, err); }
    return res.json(201, professional);
  });
};

// Updates an existing professional in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Professional.findById(req.params.id, function (err, professional) {
    if (err) { return handleError(err); }
    if(!professional) { return res.send(404); }
    var updated = _.merge(professional, req.body);
    updated.save(function (err) {
      if (err) { return handleError(err); }
      return res.json(200, professional);
    });
  });
};

// Deletes a professional from the DB.
exports.destroy = function(req, res) {
  Professional.findById(req.params.id, function (err, professional) {
    if(err) { return handleError(res, err); }
    if(!professional) { return res.send(404); }
    professional.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}