var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req,res){

//taking query into the picture
    var qur = url.parse(req.url,true);
    //creating query and saving into the variable
    var filename = '.'+qur.pathname;
//trying to get the path into the web browser
    //creating function to read is async
    fs.readFile(filename,function(err,content){
//managing error
      if(err)
      {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      }
      //if file found then printing it
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(content);
    });

    //how to list the content of the direcotry with hyper link and good format i may need a loop and anchor tag to the specific urls also
//creating destination from it
var  testFolder = '.'
fs.readdir(testFolder, (err, files) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  files.forEach(file => {
    res.write('<a href=\"'+file+'\" download> '+file+' </a><br>');
 });
  res.end();
})
}).listen(8080);
