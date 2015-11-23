import Ember from 'ember';

import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('gravatar-image', 'GravatarImageComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  assert.equal(component._state, 'inDOM');
});

test('it is added to the page', function(assert) {
  this.subject();
  this.append();

  assert.ok($('img').length);
});

test('it does not wrap the img with a span or div but with img', function(assert) {
  var component = this.subject();
  this.append();
  var wrapperEl = component.$().prop('tagName');

  assert.notEqual(wrapperEl, 'SPAN');
  assert.notEqual(wrapperEl, 'DIV');
});

test('it sets the alt attribute', function(assert) {
  var component = this.subject();
  this.append();

  Ember.run(function() {
    component.set('alt', 'John\'s Avatar');
  });

  var alt = component.$().prop('alt');
  assert.equal(alt, 'John\'s Avatar');
});

test('it sets the default class attribute', function(assert) {
  var component = this.subject();
  this.append();

  assert.ok(component.$().hasClass('gravatar-image'));
});

test('it renders at retina resolution', function(assert) {
  var component = this.subject();
  this.append();

  Ember.run(function() {
    component.set('retina', true);
  });

  var size = component.get('size');
  var imageSize = component.get('imageSize');
  var imageHeight = component.$().height();

  assert.equal(size, imageHeight, imageSize / 2);
});
