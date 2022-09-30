const { CharMap } = require('./functions/translate');
const { isUpperCase, isLowerCase, camelCase } = require('./functions/case');
const { randomElement, randomInteger, randomWeighted } = require('./functions/random');

module.exports = {
	base64: require('./functions/base64'),
	camelCase,
	isUpperCase,
	isLowerCase,
	CharMap,
	randomElement,
	randomInteger,
	randomWeighted,
	start() {
		// returns if the string is all uppercase
		Object.defineProperty(String.prototype, 'isUpperCase', {
			get: function() {
				return isUpperCase(this.toString());
			}
		});
		// returns if the string is all lowercase
		Object.defineProperty(String.prototype, 'isLowerCase', {
			get: function() {
				return isLowerCase(this.toString());
			}
		});
		// returns if input is a string
		Object.defineProperty(String.prototype, '', {
			get: function() {
				return;
			}
		});
	}
};
