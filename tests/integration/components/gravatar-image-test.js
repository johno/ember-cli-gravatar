import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gravatar-image', 'Integration | Component | gravatar image', {
  integration: true
});

test('it renders an image', function(assert) {
  this.render(hbs`{{gravatar-image}}`);
  assert.equal(this.$().find('img').length, 1);
});

test('it allows an md5 hash to be passed', function(assert) {
  const hash = '2e52ef263083c77e2a0a24454dc6f369';
  this.set('hash', hash);
  this.render(hbs`{{gravatar-image hash=hash}}`);
  const src = this.$('img').prop('src');
  assert.equal(src, 'https://www.gravatar.com/avatar/' + hash + '?s=250&d=');
});

test('it sets the alt attribute', function(assert) {
  const alt = 'John\'s Avatar';
  this.set('alt', alt);
  this.render(hbs`{{gravatar-image alt=alt}}`);
  assert.equal(this.$('img').prop('alt'), alt);
});

test('it sets the default class attribute', function(assert) {
  this.render(hbs`{{gravatar-image}}`);
  assert.ok(this.$('img').hasClass('gravatar-image'));
});

test('it renders at retina resolution', function(assert) {
  this.set('retina', true);
  this.render(hbs`{{gravatar-image retina=retina}}`);

  const size = this.get('size');
  const imageSize = this.get('imageSize');
  const imageHeight = this.$('image').height();

  assert.equal(size, imageHeight, imageSize/2);
});
