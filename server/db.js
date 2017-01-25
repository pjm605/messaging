'use strict';

var Sequelize = require('sequelize');

var databaseURI = process.env.DATABASE_URL || 'postgres://localhost:5432/winit';
var db = new Sequelize(databaseURI, {
  define: {
    timestamps: false,
    underscored: true
  }
});

module.exports = db;