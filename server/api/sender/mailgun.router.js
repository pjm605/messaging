'use strict';

var router = require('express').Router();
var Mailgun = require('mailgun-js');

var dnssync = require('dns-sync');
var os = require('os');

var mailgun_api_key = process.env.MAILGUN_API_KEY;
var mailgun_domain = process.env.MAILGUN_DOMAIN;
var mailgun_from_email = process.env.MAILGUN_FROM_EMAIL;

// create a mailgun client with settings in environment variables
var mailgun = new Mailgun({ apiKey : mailgun_api_key, domain: mailgun_domain });

router.get('/:to/:id', function (req, res) {
	// build the http link to the message display page
	// get the name of the machine where the server is running
	if(process.env.HEROKU_APPNAME) {
		var link = "http://"+process.env.HEROKU_APPNAME+".herokuapp.com/#!/display/"+req.params.id;
	}
	else {
		var serverName = dnssync.lookup(os.hostname());
		var port = process.env.PORT || 8080;
		var link = "http://"+serverName+":"+port+"/#!/display/"+req.params.id;
	}

	var data = {
		from: mailgun_from_email,
		to: req.params.to,
		subject: "New Message",
		html: link
	}

	mailgun.messages().send(data, function(err, body) {
		if (err) {
			console.log("error:", err)
		}
		else {
			res.sendStatus(200)
		}
	});
})


module.exports = router;