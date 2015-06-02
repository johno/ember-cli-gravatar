# Changelog

## 3.0.2 - 6/2/2015

Add `tmp/` to npmignore.

## 3.0.1 - 4/15/2015

Update documentation.

## 3.0.0 - 4/15/2015

* Changes the `default` property to `defaultImage`.
* Defaults to `https` and now requires `secure=false` to be passed for `http`.

## 2.5.2 - 4/14/2015

Wrap the `default` property in quotes to stop some browsers from complaining.

## 2.5.1 - 4/13/2015

Update the installation instructions for the latest ember-cli version.

## 2.5.0 - 4/13/2015

Add support for the `secure` option to specify a protocol for the url.

## 2.4.2 - 3/25/2015

Add ember observer badge.

## 2.4.1 - 3/9/2015

Upgrade ember-cli version.

## 2.4.0 - 2/19/2015

* Use a shim for `md5`
* Remove need for .jshintrc config

## 2.3.0 - 2/5/2015

* Don't alias `alt` as `email`.

If you're using the default alias before, you can still get the same resulting markup with:

```hbs
{{gravatar-image email=email alt=email}}
```

## 2.2.0 - 1/28/2015

* Don't use class in `attributeNameBindings`, use `classNames` instead with the default of `gravatar-image`.

## 2.0.1 - 1/6/2015

* Documentation additions

## 2.0.0 - 12/29/2014

* Added example site, more tests.
* Changed `tagName` to `img`.
* Changed `imgClass` binding to `class`.
