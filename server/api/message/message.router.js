'use strict';

var router = require('express').Router();

var HttpError = require('../../utils/HttpError');
var Message = require('./message.model');

router.get('/', function (req, res, next) {
	Message.findAll({})
	.then(function (messages) {
		res.json(messages)
	})
	.catch(next);
});

router.get('/:id', function (req, res, next) {
	Message.findById(req.params.id)
	.then(function (message) {
		if (!message) throw HttpError(404, "message not found");
		res.json(message)
	})
	.catch(next);
})

router.post('/', function (req, res, next) {
  Message.create(req.body)
  .then(function (message) {
    res.status(201).json(message);
  })
  .catch(next);
});

module.exports = router;