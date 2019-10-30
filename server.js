"use strict";
var express = require('express');
var fs = require('fs');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static('dist'));
/** 定时获取数据 **/
var exec = require('child_process').exec;
var shellOrder = 'sh /home/wwwroot/code/node.sh';
var schedule = require('node-schedule');
schedule.scheduleJob('20 * * * * *', function () {
    exec(shellOrder, function (err, stdout, stderr) {
        if (err) {
            console.log('err: ', err);
        }
    });
});
app.get('/json', function (req, res) {
    var text = fs.readFile(__dirname + '/dist/data.json', 'utf-8', function (error, data) {
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
app.listen(port, function () {
    console.log('server is listening on 3000 port');
});
