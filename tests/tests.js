(function(root) {
	'use strict';

	var noop = Function.prototype;

	var load = (typeof require == 'function' && !(root.define && define.amd)) ?
		require :
		(!root.document && root.java && root.load) || noop;

	var QUnit = (function() {
		return root.QUnit || (
			root.addEventListener || (root.addEventListener = noop),
			root.setTimeout || (root.setTimeout = noop),
			root.QUnit = load('../node_modules/qunitjs/qunit/qunit.js') || root.QUnit,
			addEventListener === noop && delete root.addEventListener,
			root.QUnit
		);
	}());

	var qe = load('../node_modules/qunit-extras/qunit-extras.js');
	if (qe) {
		qe.runInContext(root);
	}

	/** The `stripVariationSelectors` object to test */
	var stripVariationSelectors = root.stripVariationSelectors || (root.stripVariationSelectors = (
		stripVariationSelectors = load('../strip-variation-selectors.js') || root.stripVariationSelectors,
		stripVariationSelectors = stripVariationSelectors.stripVariationSelectors || stripVariationSelectors
	));

	/*--------------------------------------------------------------------------*/

	function forEach(array, fn) {
		var index = -1;
		var length = array.length;
		while (++index < length) {
			fn(array[index]);
		}
	}

	var data = [
		{
			'description': 'Strips U+180B and U+FE0E',
			'input': '\u180B\u21D5\u25B6\uFE0E\uD83D\uDE00',
			'expected': '\u21D5\u25B6\uD83D\uDE00'
		}
	];

	// explicitly call `QUnit.module()` instead of `module()`
	// in case we are in a CLI environment

	// `throws` is a reserved word in ES3; alias it to avoid errors
	var raises = QUnit.assert['throws'];

	QUnit.module('strip-variation-selectors');

	test('strip-variation-selectors', function() {
		forEach(data, function(item) {
			var stripped = stripVariationSelectors(item.input);
			equal(
				stripped,
				item.expected,
				item.description
			);
		});
	});

	/*--------------------------------------------------------------------------*/

	// configure QUnit and call `QUnit.start()` for
	// Narwhal, Node.js, PhantomJS, Rhino, and RingoJS
	if (!root.document || root.phantom) {
		QUnit.config.noglobals = true;
		QUnit.start();
	}
}(typeof global == 'object' && global || this));
