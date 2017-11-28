var request = require('request')
request({method:'POST', url:'http://localhost:3001/mineBlock', data:'{"relaxed":true}'}, on_response);

function on_response(err, reponse){
	if (err)
		console.log('error');
	console.log('done');
}