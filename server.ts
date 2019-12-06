var express = require('express');
var fs = require('fs');
var app = express();
const port = process.env.PORT || 3000;

app.use(express.static('dist'));


/** 定时获取数据 **/
const { exec } = require('child_process');
const shellOrder = ' /usr/local/bin/yarn run build';
const schedule = require('node-schedule')
schedule.scheduleJob('30 30 1 * * *', () => {
    exec(shellOrder, (err: any, stdout: any, stderr:any) => {
        console.log('build success....');
        if(err) {
            console.log('err: ', err)
        }
    })
});

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
app.listen(port, () => {
   console.log('server is listening on 3000 port');
});

