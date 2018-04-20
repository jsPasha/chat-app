var expect = require('expect');

var { generateMessage } = require('./message');

describe('generateMessage', () => {
	it('should generate a correct message object', () => {
		var from = 'Pavlo';
		var text = 'Hello!'
		var message = generateMessage(from, text);
		expect(message).toInclude({from, text});
		expect(message.createdAt).toBeA('number');
	});
});