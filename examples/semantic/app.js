import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { PlaceHolder5Lines, CountryMultipleSelect } from '../../src'

import '../../src/index.css'
const appElement = document.getElementById('example');

const App = (props) => {
 
  return (
    <div>
      <PlaceHolder5Lines></PlaceHolder5Lines>
      <hr />
      <CountryMultipleSelect onChange={() => {}} defaultValue={['Benin']}></CountryMultipleSelect>
    </div>
  )
}

ReactDOM.render(<App />, appElement);