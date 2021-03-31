const { isUpperCase } = require('./case');

function translate(str, map) {
	if (!str) throw new TypeError('You must provide a string!');
	if (!map) throw new TypeError('You must provide a map! Create a new CharMap() to get one.');

	[ map, mapTo ] = map.map;
	str = str.split('');

	// save the chars that are uppercase
	uppercaseChars = [];
	str.forEach((char, index) => {
		if (isUpperCase(char)) uppercaseChars.push(index);
	});
	str = map.caseSensitive ? str : str.join('').toLowerCase().split('');

	for (var i = 0; i < map.join('').length; i++) {
		str.forEach((char, index) => {
			let regex = new RegExp(map[i], 'g');
			if (char == map[i]) str[index] = mapTo[i];
		});
	}

	// make uppercaseChars uppercase
	uppercaseChars.forEach((charIndex) => {
		str[charIndex] = str[charIndex].toUpperCase();
	});

	return str.join('');
}

function CharMap(map, mapTo, caseSensitive) {
	if (!map) throw new TypeError('You must provide a string to map from!');
	if (!mapTo) throw new TypeError('You must provide a string to map to!');
	if (typeof map !== 'string' || typeof mapTo !== 'string') throw new TypeError('Maps must be strings!');
	if (map.length != mapTo.length) throw new TypeError('Maps must be the same length!');
	if (caseSensitive && typeof caseSensitive !== 'boolean') throw new TypeError('caseSensitive must be a boolean!');

	this.map = [ map.split(''), mapTo.split('') ];
	this.caseSensitive = caseSensitive || false;
}

module.exports = { translate, CharMap };
