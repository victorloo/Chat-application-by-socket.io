var app = require('express')();
var http = require('http').Server(app); 
//Express initializes app to be a function handler that you can supply to an HTTP server 

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});
// We define a route handler / that gets called when we hit our website home.

http.listen(3000, function(){
  console.log('listening on *:3000');
});
// We make the http server listen on port 3000.
// run node index.js