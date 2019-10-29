import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { DateRangePicker } from "../../src";
import moment from 'moment';

const appElement = document.getElementById('example');

const App = (props) => {
 
  const ranges = {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  }

  return (
    <div>
      <DateRangePicker>
        <button>Basic</button>
      </DateRangePicker>

      <DateRangePicker ranges={ranges}>
        <button>Ranges</button>
      </DateRangePicker>
    </div>
  )
}

ReactDOM.render(<App />, appElement);