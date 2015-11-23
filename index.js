/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-gravatar',

  included: function included(app) {
    this.app = app;
    this._super.included(app);

    app.import(app.bowerDirectory + '/blueimp-md5/js/md5.js');
    app.import('vendor/ember-cli-gravatar/md5-shim.js', {
      type: 'vendor',
      exports: { 'md5': ['md5'] }
    });
  }
};
