
'use strict';

var router = require('express').Router();

router.use('/message', require('./message/message.router'));

module.exports = router;