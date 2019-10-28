import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { DateRangePickerWrapper } from '../../src'

const appElement = document.getElementById('example');

const App = (props) => {
 
  return (
    <div>
      <DateRangePickerWrapper />
    </div>
  )
}

ReactDOM.render(<App />, appElement);