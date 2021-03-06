var twilio = require('twilio');
var router = require('express').Router();

var dnssync = require('dns-sync');
var os = require('os');
var validator = require('validator');

// read the twilio and mailgun settings from the environment variables
var twilio_sid = process.env.TWILIO_SID;
var twilio_auth_token = process.env.TWILIO_AUTH_TOKEN;
var twilio_from_number = process.env.TWILIO_FROM_NUMBER;

// create a twilio client with settings in environment variables
// I chose to store the keys in the environment variables (safer!!), please ask for actual values
var client = twilio(twilio_sid, twilio_auth_token);

router.get('/:num/:id', function (req, res) {

	if(process.env.HEROKU_APPNAME) {
		var link = "http://"+process.env.HEROKU_APPNAME+".herokuapp.com/#!/display/"+req.params.id;
	}
	else {
		var serverName = dnssync.lookup(os.hostname());
		var port = process.env.PORT || 8080;
		var link = "http://"+serverName+":"+port+"/#!/display/"+req.params.id;
	}
	
	console.log("sendTwilioMessage to:", req.params.num, " msg:", req.params.id, " hostname:"+serverName)
	var resp = client.messages.create({
		to : req.params.num,
		from : twilio_from_number,
		body : link
	}, function (err, message) {
		if (err) {
			console.log("error:", err);
		} else {
			res.sendStatus(200);
		}
	});

})


module.exports = router;