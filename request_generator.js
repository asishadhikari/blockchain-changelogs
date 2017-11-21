var http = require('http'),
    querystring = require('querystring'); 
require('request-to-curl');
var data = require('./drivedata.js');

//get data 
var postData = JSON.stringify(data);

var myport = process.env.HTTP_PORT || 3001;
 
var options = {
    hostname: 'localhost',
    port: myport,
    path: '/mineBlock',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
    }
};
var i = 10;
while (i < 10){
var req = http.request(options, (res) => {
    console.log(req.toCurl());
});
 
req.on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
});
 
// write data to request body 
req.write(postData);
i++;
req.end();

}
