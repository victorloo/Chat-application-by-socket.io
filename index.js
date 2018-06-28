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
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
// Listen on the connection event for incoming sockets, and log it to the console.

http.listen(3000, function(){
  console.log('listening on *:3000');
});
// We make the http server listen on port 3000.
// run node index.js