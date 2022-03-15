module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{php,json,html,png,svg,css}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'sw.js'
};