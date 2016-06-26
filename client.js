var net = require('net');

var CONFIG = require('./config');

var socket = new net.Socket();

var client = socket.connect({ port: CONFIG.PORT }, function() {
  console.log("YOU'RE IN THE SERVER!!!!!");
  client.write(" world :)");

  //client.end();
  client.on('data', function(data) {
    console.log("Receiving informationnn:O");
    console.log(data.toString());
    //client.end();
  });

  client.on('end', function() {
    console.log("Logged off:)");
  });
});
