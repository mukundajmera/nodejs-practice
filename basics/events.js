//create events obj to work with Events
var events = require('events');

//create emitter object
var eventEmitter = new events.EventEmitter();

var connHandler = function connected() {
  console.log('Connecting establised');
  eventEmitter.emit('data recived');
}

eventEmitter.on('connection',connHandler);

eventEmitter.on('data recived',function(){
  console.log('data recived succesfully');
});

// Fire the connection event
eventEmitter.emit('connection');

console.log("Program Ended.");
