var http = require('http'),
    querystring = require('querystring');
 
require('request-to-curl');

var data = require('./drivedata');
 
var postData = querystring.stringify({
    'msg': 'Hello World!'
});
 
var options = {
    hostname: 'localhost',
    port: 3001,
    path: '/mineBlock',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
    }
};
 
var req = http.request(options, (res) => {
    console.log(req.toCurl());
});
 
req.on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
});
 
// write data to request body 
req.write(postData);
req.end();
