# strip-variation-selectors [![Build status](https://travis-ci.org/mathiasbynens/strip-variation-selectors.svg?branch=master)](https://travis-ci.org/mathiasbynens/strip-variation-selectors) [![Dependency status](https://gemnasium.com/mathiasbynens/strip-variation-selectors.svg)](https://gemnasium.com/mathiasbynens/strip-variation-selectors)

_strip-variation-selectors_ removes Unicode variation selectors from strings.

## Installation

Via [npm](https://www.npmjs.com/):

```bash
npm install strip-variation-selectors
```

In a browser:

```html
<script src="strip-variation-selectors.js"></script>
```

In [Node.js](https://nodejs.org/), [io.js](https://iojs.org/), [Narwhal](http://narwhaljs.org/), and [RingoJS](http://ringojs.org/):

```js
var stripVariationSelectors = require('strip-variation-selectors');
```

In [Rhino](http://www.mozilla.org/rhino/):

```js
load('strip-variation-selectors.js');
```

Using an AMD loader like [RequireJS](http://requirejs.org/):

```js
require(
  {
    'paths': {
      'strip-variation-selectors': 'path/to/strip-variation-selectors'
    }
  },
  ['strip-variation-selectors'],
  function(stripVariationSelectors) {
    console.log(stripVariationSelectors);
  }
);
```

## API

### `stripVariationSelectors.version`

A string representing the semantic version number.

### `stripVariationSelectors.reverse(string)`

This function takes a string and returns the stripped version of that string, where any variation selectors have been removed.

#### Usage example

```js
// Note: U+FE0E is a variation selector.
const string = '\u21D5\u25B6\uFE0E\u{1F600}'; // '⇕▶︎😀'
console.log(
  [...string].length
); // 4

const stripped = stripVariationSelectors(string);
console.log(
  [...string].length
); // 3
```

## Unit tests & code coverage

After cloning this repository, run `npm install` to install the dependencies needed for strip-variation-selectors development and testing. You may want to install Istanbul _globally_ using `npm install istanbul -g`.

Once that’s done, you can run the unit tests in Node using `npm test` or `node tests/tests.js`. To run the tests in Rhino, Ringo, Narwhal, and web browsers as well, use `grunt test`.

To generate the code coverage report, use `grunt cover`.

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

strip-variation-selectors is available under the [MIT](https://mths.be/mit) license.
