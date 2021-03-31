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

module.exports = { isUpperCase, isLowerCase };
