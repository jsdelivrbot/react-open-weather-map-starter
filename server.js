var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist','/index.html'));
});

app.get('/app.bundle.js', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist','/app.bundle.js'));
});

app.listen(3000);
console.log('Listening in http://localhost:3000');
