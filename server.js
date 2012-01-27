var ws = require('websocket.io')
  , server = ws.listen(3000)

server.on('connection', function (socket) {
  
  console.log('connected to client');
  socket.send('You connected to a web socket!');

  socket.on('message', function (data) { 
		console.log('nessage received:', data);
  });

  socket.on('close', function () { 
		console.log('socket closed!');
  });
});