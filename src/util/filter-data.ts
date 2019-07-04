const cheerio = require('cheerio');
function filter(data: string): any {
    return new Promise((resolve, reject) => {
       var $ = cheerio.load(data);
       let tbOneAddress_top19 = $('#tblOne').find('tbody tr td > a'); 
       const tbOneAddress_top100 = $('#tblOne2').find('tbody tr td > a');
       let tbOneBitcoinAmount_top19 = $('#tblOne').find('tbody tr');
       let tbOneBitcoinAmount_top100 = $('#tblOne2').find('tbody tr');
       const addresses_top19 = tbOneAddress_top19.map(function(i: number, el: any) {
          return $(el).text();
       }).get();
       const addresses_top100 = tbOneAddress_top100.map(function(i: number, el: any) {
        return $(el).text();
     }).get();

       const address_count_top19 = tbOneBitcoinAmount_top19.map(function(i: number, el: any) {
           const btc_count_text = $(el).find('td').eq(2).text();
           return btc_count_text.substr(0, btc_count_text.indexOf('BTC') -1 );
       }).get();
       const address_count_top100 = tbOneBitcoinAmount_top100.map(function(i: number, el: any) {
        const btc_count_text = $(el).find('td').eq(2).text();
        return btc_count_text.substr(0, btc_count_text.indexOf('BTC') -1 );
    }).get();
       resolve([addresses_top19.concat(addresses_top100), address_count_top19.concat(address_count_top100)]);
    });
}
module.exports = {
    filter,
};