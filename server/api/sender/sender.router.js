var twilio = require('twilio');
var Mailgun = require('mailgun-js');
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


var mailgun_api_key = process.env.MAILGUN_API_KEY;
var mailgun_domain = process.env.MAILGUN_DOMAIN;
var mailgun_from_email = process.env.MAILGUN_FROM_EMAIL;

// create a mailgun client with settings in environment variables
var mailgun = new Mailgun({ apiKey : mailgun_api_key, domain: mailgun_domain });


function sendTwilioText(to, text) {
	var resp = client.messages.create({
		to : to,
		from : twilio_from_number,
		body : text
	});
}

function sendMailGunMail(to, text) {
	var data = {
		from: mailgun_from_email,
		to: to,
		subject: "New Message",
		html: text
	}

	mailgun.messages().send(data, function(err, body) {
		if (err) {
			console.log("error:", err)
		}
		else {
			console.log(body);
		}
	});
}

router.get('/:to/:id', function (req, res) {
	// build the http link to the message display page
	// get the name of the machine where the server is running
	var serverName = dnssync.lookup(os.hostname());
	var link = "http://"+serverName+":8080/#!/display/"+req.params.id;

	// check if input is a valid email, then use mailgun api
	if(validator.isEmail(req.params.to)) {
		console.log("sending mail to:", req.params.to);
		sendMailGunMail(req.params.to, link);
	}
	else if (validator.isNumeric(req.params.to)) {
		// if input is a valid phone number, send a text
		console.log("sending text to:", req.params.to);
		sendTwilioText(req.params.to, link);
	}
	else {
		res.sendStatus(500)
	}
})


module.exports = router;