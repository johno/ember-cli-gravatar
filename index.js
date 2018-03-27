/* eslint-env node */
'use strict';

var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');
var Path = require('path');

module.exports = {
  name: 'ember-cli-gravatar',

  included: function included(app) {
    this._super.included.apply(this, arguments);

    // If the addon has the _findHost() method (in ember-cli >= 2.7.0), we'll just
    // use that.
    if (typeof this._findHost === 'function') {
      app = this._findHost();
    }

    // Otherwise, we'll use this implementation borrowed from the _findHost()
    // method in ember-cli.
    // Keep iterating upward until we don't have a grandparent.
    // Has to do this grandparent check because at some point we hit the project.
    let current = this;
    do {
     app = current.app || app;
    } while (current.parent.parent && (current = current.parent));

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
