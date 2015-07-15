// UDP Server Sample
var s_port = 41234;
var dgram = require("dgram");
var server = dgram.createSocket("udp4");

server.on("error", function(err) {
  console.log("server error: \n" + err.stack);
  server.close();
});

server.on("message", function(msg, rinfo) {
  console.log("server got: " + msg + " from " + rinfo.address + ":" + rinfo.port);
});

server.on("listening", function() {
  var address = server.address();
  console.log("server listening " + address.address + ":" + address.port);
});

server.on("close", function() {
  console.log("closed.");
});

server.bind(s_port);

// UDP Client
var host = "localhost";
var c_port = 41234;
var client = dgram.createSocket("udp4");

var message = new Buffer("Some byte");

send(message, host, c_port)

function send(message, host, port) {
  client.send(message, 0, message.length, port, host, function(err, bytes) {
    console.log("sent.");
    client.close();
  });
  server.close();
}

