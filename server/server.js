const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

var { generateMessage } = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();

var server = http.createServer(app);

var io = socketIO(server);

io.on('connection', (socket) => {
	console.log('New user connected');

	socket.emit('newMessage', generateMessage('Admin', 'Welcome to chat app'));

	socket.broadcast.emit('newMessage', generateMessage('Admin','New User was joined'));

	socket.on('createMessage', (message, callback) => {
		
		console.log(message);

		io.emit('newMessage', generateMessage(message.from, message.text));

		callback('this is from the server');

		// socket.broadcast.emit('newMessage', generateMessage(message.from, message.text));
	});

	socket.on('disconnect', () => {
		console.log('New user disconnected')
	});

});

app.use(express.static(publicPath))

server.listen(port, () => {
	console.log(`Listen on ${port}`)
});