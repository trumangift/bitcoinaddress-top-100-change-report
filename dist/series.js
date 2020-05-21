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
    let all_series = [];
    return function(data, xAxis) {
         all_series = [];
          let addresses = getAllAddress(data, xAxis);
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
                smooth: true,
                data: addressDatasAllDate,
              };
              all_series.push(serie);
              all_series = all_series.sort((a, b) => {
                   return b.data[b.data.length - 1] - a.data[a.data.length - 1];
              });
          }
          addresses = all_series.reduce((prev ,curr) => {
             prev.push(curr.name);
             return prev;  
          }, []);
          return {
              addresses,
              all_series
          };
    };
})();
