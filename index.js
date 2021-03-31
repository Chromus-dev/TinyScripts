const { encode, decode, validate } = require('./functions/base64');
const { camelCase } = require('./functions/camelCase');
const { translate, CharMap } = require('./functions/translate');
const { isUpperCase, isLowerCase } = require('./functions/case');

module.exports = {
	base64: {
		encode,
		decode,
		validate
	},
	camelCase,
	translate,
	CharMap
};
