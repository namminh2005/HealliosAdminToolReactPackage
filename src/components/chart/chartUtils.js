import { ChartColor } from "./config";
import Chart from 'chart.js';

const ChartUtils = {
  getColor: (index) => {
    let length = ChartColor.colors.length;
    return ChartColor.colors[index%length];
  },

  // datas : [[]]
  getMaxValue: (datas) => {
    let max1 = [];
    datas.forEach(item => {
      max1.push(Math.max(...item.data));
    });
    return Math.max(...max1);
  },

  customLineChart: () => {
    Chart.defaults.LineWithLine = Chart.defaults.line;
    Chart.controllers.LineWithLine = Chart.controllers.line.extend({
        draw: function(ease) {
            Chart.controllers.line.prototype.draw.call(this, ease);
  
            if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
                var activePoint = this.chart.tooltip._active[0],
                    ctx = this.chart.ctx,
                    x = activePoint.tooltipPosition().x,
                    topY = this.chart.scales['y-axis-0'].top,
                    bottomY = this.chart.scales['y-axis-0'].bottom;

                // draw line
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(x, topY);
                ctx.lineTo(x, bottomY);
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#e5e9f2';
                ctx.stroke();
                ctx.restore();
            }
        }
    });
  },

  customToolTip: (canvasEl, tooltipModel) => {
    // Tooltip Element
    var tooltipEl = document.getElementById('chartjs-tooltip');

    // Create element on first render
    if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = 'chartjs-tooltip';
        tooltipEl.innerHTML = '<table></table>';
        document.body.appendChild(tooltipEl);
    }

    // Hide if no tooltip
    if (tooltipModel.opacity === 0) {
        tooltipEl.style.opacity = 0;
        return;
    }

    // Set caret Position
    tooltipEl.classList.remove('above', 'below', 'no-transform');
    if (tooltipModel.yAlign) {
        tooltipEl.classList.add(tooltipModel.yAlign);
    } else {
        tooltipEl.classList.add('no-transform');
    }

    function getBody(bodyItem) {
        return bodyItem.lines;
    }

    // Set Text
    if (tooltipModel.body) {
        var titleLines = tooltipModel.title || [];
        var bodyLines = tooltipModel.body.map(getBody);

        var innerHtml = '<thead>';

        titleLines.forEach(function(title) {
            innerHtml += '<tr><th>' + title + '</th></tr>';
        });
        innerHtml += '</thead><tbody>';

        bodyLines.forEach(function(body, i) {
            var colors = tooltipModel.labelColors[i];
            var style = 'background:' + colors.backgroundColor;
            style += '; border-color:' + colors.borderColor;
            style += '; border-width: 2px';
            style += '; height: 7px';
            style += '; width: 7px';
            style += '; border-radius: 50%';
            style += '; display: inline-block';
            style += '; margin-right: 5px';
            var span = '<span style="' + style + '"></span>';

            var bodyTr = '<span style="color: rgba(0,0,0,.54);font-size: 14px;">' + body + '</span>';
            innerHtml += '<tr><td>' + span + bodyTr + '</td></tr>';
        });
        innerHtml += '</tbody>';

        var tableRoot = tooltipEl.querySelector('table');
        tableRoot.innerHTML = innerHtml;
    }

    // `this` will be the overall tooltip
    var position = canvasEl.current.getBoundingClientRect();

    var tmpleft = position.left + window.pageXOffset + tooltipModel.caretX + 10;
    if(tmpleft + tooltipEl.offsetWidth > window.screen.width - 33){
      tmpleft = tmpleft - 10*2 - tooltipEl.offsetWidth;
    }

    // Display, position, and set styles for font
    tooltipEl.style.opacity = 1;
    tooltipEl.style.position = 'absolute';
    tooltipEl.style.left = tmpleft + 'px';
    tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - 30 + 'px';
    tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
    tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
    tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
    tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
    tooltipEl.style.pointerEvents = 'none';
  }
}

export default ChartUtils;