const html2Fetch = 'https://bitinfocharts.com/top-100-richest-bitcoin-addresses.html';
const https = require('https');
const getBaseData = (resolve: any, reject: any): void => {
    var html='';
    https.get(html2Fetch, (res: any) => {
        res.on('data',function(data: any){
          html += data;
        });
        res.on('end',function(){
          resolve(html);

        });
    }).on('error', (e: any) => {
        reject('error');
    });
}
module.exports = {
    getBaseData,
};