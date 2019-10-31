function getAllAddress(data, xAxis) {
    let addresses = [];
    xAxis.forEach(t => {
        let lineData = JSON.parse(data[t]);
        addresses = addresses.concat(lineData[0]);
    });
    return distinct(addresses);
}

function distinct(arrays) {
    const obj = {};
    const filters = [];
    for(let t of arrays) {
        if(!obj[t]) {
            filters.push(t);
            obj[t] = 1;
        }
    }
    return filters;
}

const series = (function() {
    const all_series = [];
    return function(data, xAxis) {
          const addresses = getAllAddress(data, xAxis);
          for (var i = 0;i < addresses.length; i++) {
              const addressDatasAllDate = [];
              for(var j = 0; j < xAxis.length; j++) {
                  let dataBydate = data[xAxis[j]];
                  dataBydate = JSON.parse(dataBydate);
                  const index = dataBydate[0].indexOf(addresses[i]);
                  let number = 0;
                  if (index >= 0) {
                      number = dataBydate[1][index];
                      number = number ? number.replace(',', '') : 0;
                      number = parseFloat(number);
                  }
                  addressDatasAllDate.push(number);
              }
              const serie =  {
                name: addresses[i],
                type: 'line',
                data: addressDatasAllDate,
              };
              all_series.push(serie);
          }
          return {
              addresses,
              all_series
          };
    };
})();
