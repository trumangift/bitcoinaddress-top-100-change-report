const series = (function() {
    const all_series = [];
    return function(data, xAxis) {
          let lineData = data[xAxis[0]];
          lineData = JSON.parse(lineData);
          const addresses = lineData[0];
          for (var i = 0;i < addresses.length; i++) {
              const addressDatasAllDate = [];
              for(var j = 0; j < xAxis.length; j++) {
                  let dataBydate = data[xAxis[j]];
                  dataBydate = JSON.parse(dataBydate);
                  const index = dataBydate[0].indexOf(addresses[i]);
                  let number = dataBydate[1][index];
                  number = number ? number.replace(',', '') : 0;
                  number = parseInt(number, 10);
                  addressDatasAllDate.push(number);
              }
              const serie =  {
                name: addresses[i],
                type: 'line',
                data: addressDatasAllDate
              };
              all_series.push(serie);
          }
          return all_series;
    };
})();