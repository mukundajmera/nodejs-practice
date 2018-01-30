var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req,res){


  //taking query into the picture
    var qur = url.parse(req.url,true);
    //creating query and saving into the variable
    var filename = qur.pathname;
      if(filename != '\/')
      {
//        res.writeHead(302, {Location: "http://localhost:8080"+filename});
        fs.readFile('.'+filename, function(err, data) {
        res.write(data.toString());
        res.end();
        });
      }
      else
      {
      //how to list the content of the direcotry with hyper link and good format i may need a loop and anchor tag to the specific urls also
    //creating destination from it
    var  testFolder = '.'
    var count  = 1;
    fs.readdir(testFolder, function (err, files) {
      //setting up the page with title
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<html><head><title> File Server</title> </head>')
    //setting body with color
      res.write('<body style=\"background-color:lightblue;\"> ')
    //creating heading and table settings with table headings also.
      res.write('<h1 alig=\'center\'> Welcome to my File Server</h1><hr>')
      res.write('<table border=\"1\" width=\"100%\"')
      res.write('<tr><td>Sno</td><td>Name</td><td colspan=\"2\">Properties</td></tr>')
      files.forEach(file => {
        if(fs.lstatSync(file).isFile())
        {
        res.write('<tr><td>'+count+'</td>');
        res.write('<td>'+file+'</td>');
        res.write('<td><a href=\"'+file+'\">  view </a></td>');
        res.write('<td><a href=\"'+file+'\" download>  download </a></td></tr>');
        count++;
        }
     });
     res.write('</table></body>')
      res.end();
    })
  }
}).listen(8080);
