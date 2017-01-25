'use strict';

var app = require('./app');
var db = require('./db');

var port = process.env.PORT || 8080;

var server = app.listen(port, function (err) {
  if (err) throw err;
  console.log('HTTP server listening on port', port);
  db.sync()
  .then(function() {
  	console.log('Oh and btw the postgres server is totally connected, too');
  })
});

module.exports = server;