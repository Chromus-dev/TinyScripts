exports.base64 = function(type, text) {
	if (!(type == encode || type == decode)) throw new TypeError('You must specify encode or decode');
	if (!type) throw new TypeError(`You must specify text to ${type}`);
	if (typeof text !== 'string') throw new TypeError('"text" must be in string format');

	function encode(text) {
		let buff = new Buffer.from(text);
		let base64data = buff.toString('base64');
		let res = {
			originalData: text,
			buff: buff,
			base64: base64data
		};
		return res;
	}
	function decode(text) {
		let buff = new Buffer.from(text, 'base64');
		let base64data = buff.toString('ascii');
		let res = {
			originalData: text,
			buff: buff,
			base64: base64data
		};
		return res;
	}

	try {
		if (type == 'encode') {
			let res = encode(text);
			return res.base64;
		} else {
			let res = decode(text);
			return res.base64;
		}
	} catch (err) {
		console.error(err);
	}
};
