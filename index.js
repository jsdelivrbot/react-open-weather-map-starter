var express = require('express');
var app = express();
var path = require('path');
const PORT = process.env.PORT || 5000

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public','/index.html'));
});

app.get('/app.bundle.js', function(req, res) {
    res.sendFile(path.join(__dirname, 'public','/app.bundle.js'));
});


app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
