
'use strict';

var router = require('express').Router();

router.use('/message', require('./message/message.router'));
router.use('/twilio', require('./sender/twilio.router'));
module.exports = router;