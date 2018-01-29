
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('http_hello_world.js', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
//appending the file
	fs.appendFile('mynewfile.txt', 'Hello node js')
    res.write('\nFile appended');
    res.end();
 });
}).listen(8080); 