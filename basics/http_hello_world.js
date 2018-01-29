var http = require('http');

http.createServer(function(req,res){
	
		res.writeHead(200,{'Content-Type':'Text/HTML'});
		res.end('Hello Mukund');
		
	
}

).listen(8080);


