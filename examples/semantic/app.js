import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { PlaceHolder5Lines } from '../../src'

import '../../src/index.css'
const appElement = document.getElementById('example');

const App = (props) => {
 
  return (
    <PlaceHolder5Lines></PlaceHolder5Lines>
  )
}

ReactDOM.render(<App />, appElement);