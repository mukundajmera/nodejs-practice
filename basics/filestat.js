var fs = require("fs");

console.log("File info node");
fs.stat('read.txt', function (err, stats) {
   if (err) {
       return console.error(err);
   }
   console.log('Printing entire stats');
   console.log(stats);
   console.log('getting informations');
   console.log("isFile ? " + stats.isFile());
   console.log("isDirectory ? " + stats.isDirectory());
});
