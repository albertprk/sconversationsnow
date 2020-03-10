var http = require("http");

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'test/plain'});
    res.end('Hey ninjas');
});

