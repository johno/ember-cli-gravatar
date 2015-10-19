/* jshint node: true */
/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {});
  app.import(app.bowerDirectory + '/JavaScript-MD5/js/md5.js');

  return app.toTree();
};
