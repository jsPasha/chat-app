var socket = io();

socket.on('connect', function () {
	console.log('Connected to server');

});

socket.on('disconnect', function () {
	console.log('Disconnected from server')
});

socket.on('newMessage', function (message) {
	var li = $('<li></li>');
	li.text(message.from + ': ' + message.text);
	$('#messages').append(li);
});

socket.on('newLocationMessage', function(message) {
	var li = $('<li></li>');
	var a = $('<a target="_blank">My current location</a>');
	a.attr('href', message.url);
	li.text(message.from + ': ');
	li.append(a);
	$('#messages').append(li);
});

$('#message_form').submit(function (e) {
	e.preventDefault();
	socket.emit('createMessage', {
		from: 'User',
		text: $('[name=message]').val()
	}, function (data) {

	});
});

var locationButton = $('#send_location');

locationButton.click(function () {
	if (!navigator.geolocation) {
		return alert('Geolocation not suported');
	}

	navigator.geolocation.getCurrentPosition(function (position) {
		socket.emit('createLocationMessage', {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude
		});
	}, function() {
		alert('Unnable to fetch location.');
	});

});
