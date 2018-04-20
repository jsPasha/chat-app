var generateMessage = (from, text) => {
	return {
		from,
		text,
		createdAt: new Date().getTime()
	}
};

var generateLocationsMessage = (from, lat, lng) => {
	return {
		from,
		url: `https://www.google.ru/maps?q=${lat},${lng}`,
		createdAt: new Date().getTime()
	}
}

module.exports = {generateMessage, generateLocationsMessage}