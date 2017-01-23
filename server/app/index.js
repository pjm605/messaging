var app = require('express')();
var path = require('path');
app.use(require('cors')());


app.use(require('./logging.middleware'));

app.use(require('./request-state.middleware'));

app.use('/api', require('../api/api.router'));

app.use(require('./statics.middleware'));

app.use(require('./error.middleware'));

app.use(function (req, res, next) {
    if (path.extname(req.path).length > 0) {
        res.status(404).end();
    } else {
        next(null);
    }
});

app.get('/*', function (req, res) {
    res.sendFile(app.get('indexHTMLPath'));
});

// Error catching endware
app.use(function (err, req, res, next) {
    console.error(err, typeof next);
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});


module.exports = app;