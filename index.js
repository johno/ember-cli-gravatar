'use strict';

var path = require('path');

function EmberCLIGravatar(project) {
  this.project = project;
  this.name    = 'Ember CLI Gravatar';
}

EmberTimeAgo.prototype.treeFor = function treeFor(name) {
  if (name === 'vendor') {
    return path.join(__dirname, 'node_modules');
  } else if(name === 'app') {
    return path.join(__dirname, 'app-addon');
  }
};

EmberTimeAgo.prototype.included = function included(app) {
  this.app = app;
};

module.exports = EmberCLIGravatar;
