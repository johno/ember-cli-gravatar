import Ember from 'ember';
import layout from '../templates/components/has-gravatar';

const {
  Component,
  getProperties,
  inject: { service },
  set
} = Ember;

export default Component.extend({
  gravatar: service(),

  init(...args) {
    this._super(...args);

    const { email, gravatar } = getProperties(this, 'email', 'gravatar');

    return gravatar.hasGravatar(email)
      .then((has)=> {
        set(this, 'has', has);
        set(this, 'checking', false);
      });
  },

  layout,
  has: false,
  checking: true,
  email: ''
});
