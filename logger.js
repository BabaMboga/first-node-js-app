console.log(__filename);
console.log(__dirname);

var url = "http:mylogger.io/log";

function log(message) {
  // Send an HTTP request
  console.log(message);
}

module.exports = log;
// module.exports.endPoint = url;
// commented out because we want to keep the url private but as u can see one can export it using a different name than one initiated

// module.exports.log = log;
// exports.log = log;
// the above two would still work 

// exports = log;
// this wouldnt work as exports references module and we cannot change that