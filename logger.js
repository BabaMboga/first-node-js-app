var url = "http:mylogger.io/log";

function log(message) {
  // Send an HTTP request
  console.log(message);
}

module.exports.log = log;
// module.exports.endPoint = url;
// commented out because we want to keep the url private but as u can see one can export it using a different name than one initiated
