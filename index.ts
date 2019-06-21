const loadData = require('./src/load-top-data.ts');
const filter_data = require('./src/util/filter-data.ts');
var {writeToFile} = require('./src/util/write-to-file.ts');
new Promise(loadData.getBaseData)
.then(filter_data.filter)
.then((value) => {
   writeToFile(value);
});