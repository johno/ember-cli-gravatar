import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src', 'alt', 'title'],
  size: 250,
  email: '',
  title: '',
  default: '',

  src: function() {
    var email = this.get('email'),
        size = this.get('size'),
        def = this.get('default');

    return '//www.gravatar.com/avatar/' + md5(email) + '?s=' + size + '&d=' + def;
  }.property('email', 'size', 'default'),

  alt: function() {
    return this.get('email');
  }.property()
});
