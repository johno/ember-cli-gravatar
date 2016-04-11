//import Ember from 'ember';
//
//import {
//  moduleForComponent,
//  test
//} from 'ember-qunit';
//
//moduleForComponent('gravatar-image', 'GravatarImageComponent', {
//  needs: []
//});
//
//test('it renders', function(assert) {
//  var component = this.subject();
//  assert.equal(component._state, 'preRender');
//
//  this.render();
//  assert.equal(component._state, 'inDOM');
//});
//
//test('it is added to the page', function(assert) {
//  this.subject();
//  this.render();
//
//  assert.ok($('img').length);
//});
//
//test('it allows an md5 hash to be passed', function(assert) {
//  const hash = '2e52ef263083c77e2a0a24454dc6f369';
//
//  var component = this.subject();
//  this.render();
//
//  Ember.run(function() {
//    component.set('hash', hash);
//  });
//
//  const src = component.$().prop('src');
//  assert.equal(src, 'https://www.gravatar.com/avatar/' + hash + '?s=250&d=');
//});
//
//test('it does not wrap the img with a span or div but with img', function(assert) {
//  var component = this.subject();
//  this.render();
//  var wrapperEl = component.$().prop('tagName');
//
//  assert.notEqual(wrapperEl, 'SPAN');
//  assert.notEqual(wrapperEl, 'DIV');
//});
//
//test('it sets the alt attribute', function(assert) {
//  var component = this.subject();
//  this.render();
//
//  Ember.run(function() {
//    component.set('alt', 'John\'s Avatar');
//  });
//
//  var alt = component.$().prop('alt');
//  assert.equal(alt, 'John\'s Avatar');
//});
//
//test('it sets the default class attribute', function(assert) {
//  var component = this.subject();
//  this.render();
//
//  assert.ok(component.$().hasClass('gravatar-image'));
//});
//
//test('it renders at retina resolution', function(assert) {
//  var component = this.subject();
//  this.render();
//
//  Ember.run(function() {
//    component.set('retina', true);
//  });
//
//  var size = component.get('size');
//  var imageSize = component.get('imageSize');
//  var imageHeight = component.$().height();
//
//  assert.equal(size, imageHeight, imageSize / 2);
//});
