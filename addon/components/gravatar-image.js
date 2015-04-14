import Ember from 'ember';
import md5 from 'md5';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src', 'alt', 'title'],
  classNames: ['gravatar-image'],
  size: 250,
  email: '',
  title: '',
  default: '',
  secure: null,

  src: Ember.computed('email', 'size', 'default', function() {
    var email = this.get('email'),
        size = this.get('size'),
        def = this.get('default'),
        secure = this.get("secure"),
        protocol;
    if(secure===null){
      protocol = ''
    } else if (secure===false){
      protocol = 'http:'
    } else{
      protocol = 'https:'
    }
    return protocol + '//www.gravatar.com/avatar/' + md5(email) + '?s=' + size + '&d=' + def;
  })
});
