'use strict';

var Sequelize = require('sequelize');

var db = require('../../db');

var message = db.define('message', {
  email: {
    type: Sequelize.STRING
  },
  phone: {
  	type: Sequelize.STRING
  },
  message: Sequelize.STRING
});

module.exports = message;