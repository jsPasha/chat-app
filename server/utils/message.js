const moment = require('moment');

var generateMessage = (from, text) => {
	return {
		from,
		text,
		createdAt: moment().valueOf()
	}
};

var generateLocationsMessage = (from, lat, lng) => {
	return {
		from,
		url: `https://www.google.ru/maps?q=${lat},${lng}`,
		createdAt: moment().valueOf()
	}
}

module.exports = {generateMessage, generateLocationsMessage}