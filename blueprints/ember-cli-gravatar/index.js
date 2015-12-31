module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addBowerPackagesToProject([
		 {name: 'blueimp-md5', target: '2.1.0'}
    ]);
  }
};
