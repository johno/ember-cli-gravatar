'use strict';

var path = require('path');

function EmberCLIGravatar(project) {
  this.project = project;
  this.name    = 'Ember CLI Gravatar';
}

EmberCLIGravatar.prototype.treeFor = function treeFor(name) {
  if(name === 'app') {
    return path.join(__dirname, 'app-addon');
  } if (name === 'templates') {
    return path.join(__dirname, 'app-addon', 'components');
  }
};

EmberCLIGravatar.prototype.included = function included(app) {
  this.app = app;
};

module.exports = EmberCLIGravatar;
