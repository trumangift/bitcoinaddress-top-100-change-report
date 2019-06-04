const cheerio = require('cheerio');
function filter(data: string): any {
    return new Promise((resolve, reject) => {
       var $ = cheerio.load(data);
       const tbOneAddress_top19 = $('#tblOne').find('tbody tr td > a'); 
       // const tblOne2 = $('#tblOne2').find('tbody tr td > a');
       const tbOneBitcoinAmount_top19 = $('#tblOne').find('tbody tr');
       const addresses_top19 = tbOneAddress_top19.map(function(i: number, el: any) {
          return $(el).text();
       }).get();

       const address_count_top19 = tbOneBitcoinAmount_top19.map(function(i: number, el: any) {
           const btc_count_text = $(el).find('td').eq(2).text();
           return btc_count_text.substr(0, btc_count_text.indexOf('BTC') -1 );
       }).get();
       resolve([addresses_top19, address_count_top19]);
    });
}
module.exports = {
    filter,
};