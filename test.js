'use strict';

var path = require('path');
var test = require('tape');

var npmRoot = require('./');

test('local npm root', function (assert) {
  npmRoot(function (err, root) {
    assert.error(err, 'It should not fail');
    assert.equal(root, path.join(__dirname, 'node_modules'), 'The local node_modules directory should be returned');
    assert.end();
  });
});

test('global npm root', function (assert) {
  npmRoot({global: true}, function (err, root) {
    assert.error(err, 'It should not fail');
    assert.notEqual(root, path.join(__dirname, 'node_modules'), 'The global node_modules directory should be returned');
    assert.end();
  });
});
