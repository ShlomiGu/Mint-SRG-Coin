import { black } from "material-ui/styles/colors";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { colors, names } from "./chartData";

class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        options: {
          series: [70, 3.5, 14, 10, 10, 15, 5],
          labels: names,
          chart: {
            width: 800,
            type: 'donut',
          },
          style: {
            fontSize: '40px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 'bold',
            color: "#060707"
          },
          background: {
            enabled: true,
            foreColor: '#999999',
            padding: 0,
            borderRadius: 0,
            borderWidth: 0,
            borderColor: '#999999',
            opacity: 0.9,
            color: '#999999',
          },
          colors: colors,
          plotOptions: {
            pie: {
              startAngle: 0,
              endAngle: 360,
              expandOnClick: false,
              donut: {
                size: "60px",
                labels: {
                  show: true,
                  value: {
                    show: true,
                    formatter: function (val) {
                      return (parseInt(val)).toLocaleString()
                    }
                  },
                  name: {
                    show: true,
                    formatter: function (val) {
                      return (val)
                    }
                  },
                  total: {
                    show: true,
                    formatter: function (w) {
                      return w.globals.seriesTotals.reduce((a, b) => {
                        return (a + b)
                      }, 0).toLocaleString()
                    }
                  },
                  fontSize: "100px",
                  fontFamily: 'Poppins',
                  text: "sh"
                }
              }
            }
          },
          dataLabels: {
            enabled: true,
            // enabledOnSeries: undefined,
          },
          fill: {
            // type: 'gradient',
            type: 'donut',
          },
          legend: {
            formatter: function(val, opts) {
              return '\t' + names[opts.seriesIndex]
              // return val + " - " + opts.w.globals.series[opts.seriesIndex]
            }
          },
          title: {
            // text: 'Gradient Donut with custom Start-angle'
          },
          responsive: [{
            breakpoint: 350,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
        series: [2975000000, 245000000, 980000000, 700000000, 700000000, 1050000000, 350000000]
      };
    }

  

    render() {
      return (
        

        <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} labels={this.state.labels} type="donut" width={800} />
        </div>
      );
    }
}

export default ApexChart;