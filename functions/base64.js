function validate(text) {
	if (typeof text !== 'string') throw new TypeError('Text must be in string format');
	return /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$/.test(text) ? true : false;
}
function encode(text) {
	if (typeof text !== 'string') throw new TypeError('Text must be in string format');
	return new Buffer.from(text).toString('base64');
}
function decode(text) {
	if (typeof text !== 'string') throw new TypeError('Text must be in string format');
	if (!validate(text)) throw new TypeError('That is not valid base64');
	return new Buffer.from(text, 'base64').toString('ascii');
}

module.exports = {
	encode,
	decode,
	validate
};
