var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static('dist'));
app.get('/json', function (req:any, res:any) {
    const text = fs.readFile(__dirname + '/dist/data.json', 'utf-8' ,(error: any, data: any) => {
        if (error) {
           res.status(400).json({
                message: error
           });
           return;
        }
        data = JSON.parse(data);
        res.json(data);
    });
});
app.listen(3000, () => {
   console.log('server is listening on 3000 port');
});