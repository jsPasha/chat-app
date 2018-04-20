var expect = require('expect');

var { generateMessage, generateLocationsMessage } = require('./message');

describe('generateMessage', () => {
	it('should generate a correct message object', () => {
		var from = 'Pavlo';
		var text = 'Hello!'
		var message = generateMessage(from, text);
		expect(message).toInclude({from, text});
		expect(message.createdAt).toBeA('number');
	});
});

describe('generateLocationsMessage', () => {
	it('should generate a correct location object', () => {
		var from = 'Pavlo';
		var lat = 1;
		var lng = 1;
		var url = `https://www.google.ru/maps?q=1,1`;

		var message = generateLocationsMessage(from, lat, lng);
		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({
			from, url
		});
		
	});
});