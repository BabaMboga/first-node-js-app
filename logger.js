console.log(__filename);
console.log(__dirname);

const EventEmitter = require('events');
// const emitter = new EventEmitter();

var url = "http:mylogger.io/log";
class Logger extends EventEmitter {
    log(message) {
        // Send an HTTP request
        console.log(message);
      
        this.emit('Logging', {id: 1, url: 'http://'}); // emitter rlistened in app module
    }

}


// module.exports = log;
module.exports = Logger;
// module.exports.endPoint = url;
// commented out because we want to keep the url private but as u can see one can export it using a different name than one initiated

// module.exports.log = log;
// exports.log = log;
// the above two would still work 

// exports = log;
// this wouldnt work as exports references module and we cannot change that