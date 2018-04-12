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

  didReceiveAttrs() {
    this._super(...arguments);

    const { email, gravatar, secure } = getProperties(this, 'email', 'gravatar', 'secure');

    return gravatar.hasGravatar(email, secure, 'www.gravatar.com')
      .then((hasGravatar)=> {
        set(this, 'hasGravatar', hasGravatar);
        set(this, 'checking', false);
      });
  },

  layout,
  hasGravatar: false,
  checking: true,
  email: '',
  secure: true
});
