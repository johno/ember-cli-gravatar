'use strict';

module.exports = {
  name: 'ember-cli-gravatar',

    included: function included(app) {
    this.app = app;
    this._super.included(app);

    app.import("node_modules/blueimp-md5/md5.js");
  }
};
