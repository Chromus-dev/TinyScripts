const randomElement = (array) => {
	if (!array.constructor === Array) throw new TypeError('You must pass an array');
	return array[Math.floor(Math.random() * array.length)];
};
const randomInteger = (min, max) => {
	if (typeof min !== 'number' || typeof max !== 'number') throw new TypeError('You must pass a number');
	Math.floor(Math.random() * (max - min + 1)) + min;
};
const randomWeighted = (items, weights) => {
	if (!Array.isArray(items) || !Array.isArray(weights)) throw new TypeError('You must pass arrays');
	if (items.length != weights.length) throw new TypeError('Arrays must be the same length');
	weights.forEach((item) => {
		if (typeof item != 'number') throw new TypeError('Weights must be numbers');
	});

	var i;
	for (i = 0; i < weights.length; i++) weights[i] += weights[i - 1] || 0;

	var random = Math.random() * weights[weights.length - 1];
	for (i = 0; i < weights.length; i++) if (weights[i] > random) break;

	return items[i];
};

module.exports = {
	randomElement,
	randomInteger,
	randomWeighted
};
