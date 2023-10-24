const logger = require('./logger'); 
// how to import the exported items

console.log(logger)

function sayHello(name) {
    console.log('Hello ' + name)
}

sayHello('Little girl');

// console.log(window)
// It won't work because in node.js the window and document object don't exist like it does for js in browsers

logger('message');

// the path module begins here
const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);

// the os module begins here

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory);

// the above can be simplified using template strings below

console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)
