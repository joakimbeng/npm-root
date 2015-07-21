'use strict';
var exec = require('child_process').exec;

module.exports = exports = function npmRoot(opts, cb) {
  if (!cb) {
    cb = opts;
    opts = {};
  }

  var cmd = 'npm root';

  if (opts.global) {
    cmd += ' -g';
  }

  exec(cmd, function (err, stdout) {
    if (err) {
      return cb(err);
    }
    cb(null, stdout.toString().trim());
  });
};
