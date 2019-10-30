"use strict";
var cheerio = require('cheerio');
function filter(data) {
    return new Promise(function (resolve, reject) {
        var $ = cheerio.load(data);
        var tbOneAddress_top19 = $('#tblOne').find('tbody tr td > a');
        var tbOneAddress_top100 = $('#tblOne2').find('tbody tr td > a');
        var tbOneBitcoinAmount_top19 = $('#tblOne').find('tbody tr');
        var tbOneBitcoinAmount_top100 = $('#tblOne2').find('tbody tr');
        var addresses_top19 = tbOneAddress_top19.map(function (i, el) {
            return $(el).text();
        }).get();
        var addresses_top100 = tbOneAddress_top100.map(function (i, el) {
            return $(el).text();
        }).get();
        var address_count_top19 = tbOneBitcoinAmount_top19.map(function (i, el) {
            var btc_count_text = $(el).find('td').eq(2).text();
            return btc_count_text.substr(0, btc_count_text.indexOf('BTC') - 1);
        }).get();
        var address_count_top100 = tbOneBitcoinAmount_top100.map(function (i, el) {
            var btc_count_text = $(el).find('td').eq(2).text();
            return btc_count_text.substr(0, btc_count_text.indexOf('BTC') - 1);
        }).get();
        resolve([addresses_top19.concat(addresses_top100), address_count_top19.concat(address_count_top100)]);
    });
}
module.exports = {
    filter: filter,
};
