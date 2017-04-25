/* jshint node: true */
'use strict';

var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');
var Path = require('path');

module.exports = {
  name: 'ember-cli-gravatar',

  included: function included(app) {
    // workaround for https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }
    this.app = app;
    this._super.included(app);

    app.import('vendor/md5.js');
    app.import('vendor/ember-cli-gravatar/md5-shim.js', {
      type: 'vendor',
      exports: { 'md5': ['md5'] }
    });
  },

  treeForVendor: function treeForVendor(vendorTree) {
    var md5Tree = new Funnel(Path.dirname(require.resolve('blueimp-md5/js/md5.js')), {
      files: [ 'md5.js' ],
    });

    if (vendorTree) {
      return new MergeTrees([ vendorTree, md5Tree ]);
    }

    return md5Tree;
  }
};
