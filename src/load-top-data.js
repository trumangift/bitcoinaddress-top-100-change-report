"use strict";
var html2Fetch = 'https://bitinfocharts.com/top-100-richest-bitcoin-addresses.html';
var https = require('https');
var getBaseData = function (resolve, reject) {
    var html = '';
    https.get(html2Fetch, function (res) {
        res.on('data', function (data) {
            html += data;
        });
        res.on('end', function () {
            resolve(html);
        });
    }).on('error', function (e) {
        reject('error');
    });
};
module.exports = {
    getBaseData: getBaseData,
};
