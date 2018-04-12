import { moduleFor, test } from 'ember-qunit';

moduleFor('service:gravatar', 'Unit | Service | gravatar', {});

test('does not have gravatar', function(assert) {
  const service = this.subject();
  const done = assert.async();

  service.hasGravatar(['foo'], true, 'www.gravatar.com')
    .then((result)=> {
      assert.equal(result, false);
      done();
    });
});

test('does have a gravatar', function(assert) {
  const service = this.subject();
  const done = assert.async();

  service.hasGravatar(['orahoske.2@gmail.com'], true, 'www.gravatar.com')
    .then((result)=> {
      assert.equal(result, true);
      done();
    });
});

test('returns false if it cannot lookup the domain', function(assert) {
  const service = this.subject();
  const done = assert.async();

  service.hasGravatar(['orahoske.2@gmail.com'], true, 'doesnotexist.example.com')
    .then((result)=> {
      assert.equal(result, false);
      done();
    });
});

test('throws error if there is not an email', function(assert) {
  const service = this.subject();

  assert.throws(function() {
    service.hasGravatar();
  });
});
