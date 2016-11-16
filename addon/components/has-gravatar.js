import Ember from 'ember';
import layout from '../templates/components/has-gravatar';
import md5 from 'md5';

export default Ember.Component.extend({
  init(...args) {
    const email = this.get('email');
    const hash = md5(email);

    this._super(...args);

    return Ember.$.ajax(`http://www.gravatar.com/avatar/${hash}?d=404`, {
      complete: ({ status })=> {
        const NOT_FOUND = 404;

        this.set('has', (status !== NOT_FOUND));
        this.set('checking', false);
      }
    });
  },

  layout,
  has: false,
  checking: true,
  email: ''
});
