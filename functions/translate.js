const { isUpperCase } = require('./case');

class CharMap {
	constructor(map, mapTo, caseSensitive) {
		if (!map) throw new TypeError('You must provide a string to map from!');
		if (!mapTo) throw new TypeError('You must provide a string to map to!');
		if (typeof map !== 'string' || typeof mapTo !== 'string')
			throw new TypeError('Maps must be strings!');
		if (map.length != mapTo.length)
			throw new TypeError('Maps must be the same length!');
		if (caseSensitive && typeof caseSensitive !== 'boolean')
			throw new TypeError('caseSensitive must be a boolean!');

		this.map = map.split('');
		this.mapTo = mapTo.split('');
		this.caseSensitive = caseSensitive || false;
	}
	translate(str) {
		if (typeof str !== 'string')
			throw new TypeError('You must provide a string!');

		// console.log(this.map);
		// console.log(this.mapTo);
		// console.log('test');
		/*     if (!map)
          throw new TypeError(
            'You must provide a map! Create a new CharMap() to get one.'
          ); */
		str = str.split('');

		// save the chars that are uppercase
		let uppercaseChars = [];
		str.forEach((char, index) => {
			if (isUpperCase(char)) uppercaseChars.push(index);
		});
		str = this.caseSensitive ? str : str.join('').toLowerCase().split('');

		for (var x = 0; x < this.map.length; x++) {
			str.forEach((char, index) => {
				let regex = new RegExp(this.map[x], 'g');
				if (char == this.map[x]) str[index] = this.mapTo[x];
			});
		}

		// make uppercaseChars uppercase
		uppercaseChars.forEach((charIndex) => {
			str[charIndex] = str[charIndex].toUpperCase();
		});

		return str.join('');
	}
}

module.exports = { CharMap };
