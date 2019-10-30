"use strict";
var loadData = require('./src/load-top-data.ts');
var filter_data = require('./src/util/filter-data.ts');
var writeToFile = require('./src/util/write-to-file.ts').writeToFile;
new Promise(loadData.getBaseData)
    .then(filter_data.filter)
    .then(function (value) {
    writeToFile(value);
});
