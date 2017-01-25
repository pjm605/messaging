
'use strict';

var router = require('express').Router();

router.use('/message', require('./message/message.router'));
// router.use('/sender', require('./sender/sender.router'));
router.use('/twilio', require('./sender/twilio.router'));
router.use('/mailgun', require('./sender/mailgun.router'));

module.exports = router;