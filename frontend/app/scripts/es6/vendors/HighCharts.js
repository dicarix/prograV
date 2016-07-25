class Top10 {

  constructor () {

    // Base config for all the charts
    var baseConfig = {
      chart: {
        type: 'column'
      },
      xAxis: {
        type: 'category',
        labels: {
          style: {
            fontSize: '13px'
          }
        },
        tickInterval: 4
      },
      exporting: {
        enabled: false
      },
      credits: false,
      yAxis: {
        min: 0,
        title: {
          text: null
        }
      },
      legend: {
        enabled: false
      }
    }

    var getWeather = $.ajax({
      type: 'GET',
      url: '../api/weather.json',
      contentType: 'application/json',
      dataType: 'json'
    });

    getWeather.done(function( data ) {
      $(data).each(function(index) {
        $('#chart-' + data[index]['hs-type'] + '-' + data[index]['hs-position']).highcharts(
          $.extend(baseConfig, data[index])
        );
      });
    });
  }
}

module.exports = Top10; //set what can be imported from this file
