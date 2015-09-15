var regenerate = require('regenerate');
var fs = require('fs');

var packageInfo = JSON.parse(fs.readFileSync('package.json', 'utf8'));

var unicodePackage = Object.keys(packageInfo.devDependencies).find(function(key) {
	return /^unicode-/.test(key);
});

var variationSelectors = regenerate(
	require(unicodePackage + '/properties/Variation_Selector/code-points')
);

module.exports = {
	'variationSelector': variationSelectors.toString(),
	'version': packageInfo.version
};
