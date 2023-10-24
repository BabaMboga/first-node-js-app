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
