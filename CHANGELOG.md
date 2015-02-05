# Changelog

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
