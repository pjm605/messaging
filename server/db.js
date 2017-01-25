'use strict';

var Sequelize = require('sequelize');

//var databaseURI = 'postgres://mhpwwcctbmmrov:054953f5803466757f693995fd2f436e865e88fa6425287b9513dd6145805daf@ec2-54-235-90-107.compute-1.amazonaws.com:5432/dd3kqfc6s7d5eh';
var databaseURI = process.env.DATABASE_URL;
var db = new Sequelize(databaseURI, {
  define: {
    timestamps: false,
    underscored: true
  }
});

module.exports = db;