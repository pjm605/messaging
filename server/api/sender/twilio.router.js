var twilio = require('twilio');
var router = require('express').Router();

var dnssync = require('dns-sync');
var os = require('os');

var sid = process.env.TWILIO_SID
var auth_token = process.env.TWILIO_AUTH_TOKEN
var from_number = process.env.TWILIO_FROM_NUMBER
var client = twilio(sid, auth_token);

router.get('/:num/:id', function (req, res) {

	var serverName = dnssync.lookup(os.hostname())
	console.log("sn:"+serverName);

	//http://localhost:8080/#!/display/1

	var link = "http://"+serverName+":8080/#!/display/"+req.params.id;
	
	console.log("sendTwilioMessage to:", req.params.num, " msg:", req.params.id, " hostname:"+serverName)
	var resp = client.messages.create({
		to : req.params.num,
		from : from_number,
		body : link
	});

})


module.exports = router;