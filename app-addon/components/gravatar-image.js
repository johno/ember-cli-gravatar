import Ember from 'ember';

export default Ember.Component.extend({
  size: 250,
  email: '',
  alt: '',

  gravatarUrl: function() {
    var email = this.get('email'),
        size = this.get('size');

    return 'http://www.gravatar.com/avatar/' + md5(email) + '?s=' + size;
  }.property('email', 'size'),

  altText: function() {
    return this.get('alt') || this.get('email');
  }.property('alt')
});
