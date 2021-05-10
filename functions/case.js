function isUpperCase(text) {
	if (!text) throw new TypeError('You must provide a string to check!');
	if (typeof text !== 'string') throw new TypeError('Text must be a string!');
	return text == text.toUpperCase() ? true : false;
}
function isLowerCase(text) {
	if (!text) throw new TypeError('You must provide a string to check!');
	if (typeof text !== 'string') throw new TypeError('Text must be a string!');
	return text == text.toLowerCase() ? true : false;
}
function camelCase(text) {
	return text.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
		if (+match === 0) return '';
		return index === 0 ? match.toLowerCase() : match.toUpperCase();
	});
}

module.exports = { isUpperCase, isLowerCase, camelCase };
