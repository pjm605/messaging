'use strict';

var Sequelize = require('sequelize');

var db = require('../../db');

var message = db.define('message', {
  phone_or_email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  message: Sequelize.STRING
});

module.exports = message;