const Logger = require("./logger");
// how to import the exported items

const logger = new Logger();

// event is raised in logger module
logger.on('Logging', function(){
    console.log('Listener 3 called');
});


console.log(Logger);

function sayHello(name) {
  console.log("Hello " + name);
}

sayHello("Little girl");

// console.log(window)
// It won't work because in node.js the window and document object don't exist like it does for js in browsers

logger.log("message");

// the path module begins here
const path = require("path");

var pathObj = path.parse(__filename);

console.log(pathObj);

// the os module begins here

const os = require("os");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log("Total Memory: " + totalMemory);

// the above can be simplified using template strings below

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

// file system module begins here
// it has both synchronous and asynchronous methods

const fs = require("fs");

const files = fs.readdirSync("./");
console.log(files);

fs.readdir("./", function (err, files) {
  if (err) console.log("Error", err);
  else console.log("Result", files);
});

// the event module starts here

const EventEmitter = require('events'); 
// note that the variable is given different naming style to show its a class

const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', function(arg){ // e, eventArg
    console.log('Listener called', arg);
});

// on and addlistener are similar
emitter.addListener('messageLogged', function(){
    console.log('Listener 2 called');
});


// Raise an event
// added event arguments
emitter.emit('messageLogged', {id: 1, url: 'http://'});

// extending event emitters

// http module starts here

const http  = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses'){
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

//the below has been commented out as we add a new method in the createServer module above
// server.on('connection', (socket) => {
//     console.log('New connection...');
// });

server.listen(3000);

console.log('Listening in port 3000...')
