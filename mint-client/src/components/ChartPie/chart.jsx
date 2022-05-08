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
            // type: 'donut',
            width: 800,
            height: 400,
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
                    fontFamily: 'Poppins',
                    formatter: function (val) {
                      return (parseInt(val)).toLocaleString()
                    }
                  },
                  name: {
                    show: true,
                    fontFamily: 'Poppins',
                    formatter: function (val) {
                      if(val === "Total"){
                        return "Total Coins"
                      }
                      return (val)
                    }
                  },
                  total: {
                    show: true,
                    fontSize: '18px',
                    color: '#373d3f',
                    formatter: function (w) {
                      return w.globals.seriesTotals.reduce((a, b) => {
                        return (a + b)
                      }, 0).toLocaleString()
                    }
                  },
                  fontSize: "100px",
                  fontFamily: 'Poppins',
                }
              }
            }
          },
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '18px',
              fontFamily: 'Poppins',
              fontWeight: 500,
              colors: ["#060707"],
            },
          },
          fill: {
            // type: 'gradient',
            type: 'donut',
          },
          legend: {
            labels: {
              colors: '#F1F1F1',
            },
            markers: {
              width: 16,
              height: 16,
            },
            itemMargin: {
              horizontal: 5,
              vertical: 10
          },
            fontFamily: 'Poppins',
            fontSize: '24px',
            offsetY: 80,
            offsetX: -100,
            formatter: function(val, opts) {
              return '\t' + names[opts.seriesIndex]
            },
            onItemClick: {
              toggleDataSeries: false,
            },
          },
          tooltip: {
            enabled: false,
          },
          responsive: [{
            breakpoint: 425,
            options: {
              chart: {
                width: '200%',
                height: 650,
              },
              plotOptions: {
                pie: {
                  startAngle: 0,
                  endAngle: 360,
                  expandOnClick: false,
                  donut: {
                    size: "60px",
                    labels: {
                      show: true,
                      total: {
                        show: true,
                        fontSize: '10px',
                      },
                    },
                  },
                },
              },
              legend: {
                position: 'bottom',
                markers: {
                  width: 12,
                  height: 12,
                },
                horizontalAlign: 'left',
                fontSize: '16px',
                offsetY: 0,
                offsetX: 0,
                itemMargin: {
                  horizontal: 120,
                  vertical: 8,
                },
              },
              dataLabels: {
                enabled: true,
                style: {
                  fontSize: '13px',
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  colors: ["#060707"],
                },
              },
            }
          }]
        },
      
      
        series: [2975000000, 245000000, 980000000, 700000000, 700000000, 1050000000, 350000000]
      };
    }

  

    render() {
      return (
        

        <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} labels={this.state.labels} type="donut" width={1100} />
        </div>
      );
    }
}

export default ApexChart;