import Ember from 'ember';
import md5 from 'md5';
const {
  $: { ajax },
  RSVP: { Promise },
  Service
} = Ember;


export default Service.extend({
  hasGravatar([email]) {
    if (!email) {
      throw new Error('expecting email');
    }

    const hash = md5(email);

    return new Promise((resolve)=> {
      ajax(`http://www.gravatar.com/avatar/${hash}?d=404`, {
        complete: ({ status })=> {
          const NOT_FOUND = 404;

          resolve((status !== NOT_FOUND));
        }
      });
    });
  }
});
