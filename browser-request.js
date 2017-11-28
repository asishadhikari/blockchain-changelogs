var sleep = require('system-sleep');
var request = require('request')
var name = "Ashish is a rockstar";
for (var i = 0; i< 20; i++){
request({method:'POST', url:'http://localhost:3001/mineBlock', json:{data:name}});
sleep(1);
}