var app = require('express')();
var http = require('http').Server(app); 
// Express initializes app to be a function handler that you can supply to an HTTP server 
var io = require('socket.io')(http);
// Initialize a new instance of socket.io by passing the http (the HTTP server) object.

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});
// We define a route handler / that gets called when we hit our website home.

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
// In this case, for the sake of simplicity we’ll send the message to everyone, including the sender.

http.listen(3000, function(){
  console.log('listening on *:3000');
});
// We make the http server listen on port 3000.
// run node index.js