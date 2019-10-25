import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {LineChart} from '../../src'

const appElement = document.getElementById('example');

const App = (props) => {
  const ctxLabel = ['Oct 15', 'Oct 16', 'Oct 17', 'Oct 18', 'Oct 19', 'Oct 20', 'Oct 21', 'Oct 22', 'Oct 23', 'Oct 24', 'Oct 25', 'Oct 26'];
  const chartData = [
    {
      label: 'user',
      data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30]
    },
    {
      label: 'player',
      data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20]
    },
    {
      label: 'pet',
      data: [5, 20, 60, 45, 20, 35, 15, 75, 20, 30, 34, 23]
    }
  ]
  return (
    <div>
      <LineChart ctxLabel={ctxLabel} chartData={chartData} />
    </div>
  )
}

ReactDOM.render(<App />, appElement);