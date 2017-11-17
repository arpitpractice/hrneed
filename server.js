var express = require('express');

var cors = require('cors');

var path = require('path');

var serveStatic = require('serve-static');

app = express();

app.use(serveStatic(path.join(__dirname)));

app.use(cors());

app.get('*', function(req, res) {
    res.redirect('/');
});

var port = process.env.PORT || 5000;

app.listen(port);

console.log('server started '+port);