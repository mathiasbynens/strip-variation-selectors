var regenerate = require('regenerate');
var fs = require('fs');

var packageInfo = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// TODO: Use `Array#find` for this as soon as it lands in V8/Node/io.js.
var unicodePackage = Object.keys(packageInfo.devDependencies).filter(function(key) {
	return /^unicode-/.test(key);
})[0];

var variationSelectors = regenerate(
	require(unicodePackage + '/properties/Variation_Selector/code-points')
);

module.exports = {
	'variationSelector': variationSelectors.toString(),
	'version': packageInfo.version
};
