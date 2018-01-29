/*var fs = require("fs");

// Asynchronous read
fs.readFile('input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");


*/

var files = require("fs");

//a file call

files.readFile('read.txt',function (error,data) {
  if(error)
  {
    console.log.console.error(error);
    return;
  }
  console.log('Async read: '+data.toString());
});
console.log('i will execute first');
