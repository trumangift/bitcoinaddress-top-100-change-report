var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static('dist'));
app.get('/json', function (req, res) {
    const text = fs.readFileSync(__dirname + '/dist/data.json');
    res.status(200).send(text);
});
app.listen(3000);