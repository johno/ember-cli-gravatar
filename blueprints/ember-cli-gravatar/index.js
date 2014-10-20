module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function(options) {
    this.addBowerPackageToProject('moment');
  }
};
