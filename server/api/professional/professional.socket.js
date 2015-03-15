/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Professional = require('./professional.model');

exports.register = function(socket) {
  Professional.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Professional.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('professional:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('professional:remove', doc);
}