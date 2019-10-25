import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';
import { ChartColor } from './config';
import ChartUtils from './chartUtils';
const canvasStyle = {
  position: 'relative',
  height: '40vh',
  width: '100%'
};

class LineChart extends React.Component {
  constructor(props) {
    super(props);
  }

  getDataChartConfig() {
    let dataChartConfig = {
      labels: this.props.ctxLabel,
      datasets: []
    };
    this.props.chartData.forEach((item, index) => {
      let dataItem = {
        data: item.data,
        borderColor: ChartUtils.getColor(index),
        borderWidth: 1,
        fill: false,
        pointRadius: 2,
        pointHoverRadius: 3,
        pointBackgroundColor: ChartUtils.getColor(index),
        lineTension: 0,
        label: item.label
      };
      dataChartConfig.datasets.push(dataItem);
    });
    return dataChartConfig;
  }

  getOptionsChartConfig() {
    return {
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        yAxes: [{
          gridLines: {
            color: ChartColor.gridLines.yAxes
          },
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            max: ChartUtils.getMaxValue(this.props.chartData)
          }
        }],
        xAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            beginAtZero: true,
            fontSize: 11
          }
        }]
      },
      tooltips: {
        mode: 'x-axis',
        intersect: false // enabled: false,
        // custom: ChartUtils.customToolTip.bind(null,canvasEl)

      },
      hover: {
        mode: 'x-axis',
        intersect: false
      } // 'legend': {
      //   display: false
      // }

    };
  }

  componentDidMount() {
    ChartUtils.customLineChart();
    let chartConfig = {
      type: 'LineWithLine',
      data: this.getDataChartConfig(),
      options: this.getOptionsChartConfig()
    }; // run chart

    new Chart(this.canvasEl, chartConfig);
  }

  render() {
    return React.createElement("div", {
      className: "chart-container",
      style: canvasStyle
    }, React.createElement("canvas", {
      ref: el => this.canvasEl = el,
      id: "myChart",
      width: "400",
      height: "400"
    }));
  }

}

export default LineChart;