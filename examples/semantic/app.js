import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { PlaceHolder5Lines, CountryMultipleSelect, DropdownList } from '../../src'

import '../../src/index.css'
const appElement = document.getElementById('example');

const dropdown = {
  placeHolder: "Please select",
  options: [
    {
      key: 'Jenny Hess',
      text: 'Jenny Hess',
      value: 'Jenny Hess'
    },
    {
      key: 'Elliot Fu',
      text: 'Elliot Fu',
      value: 'Elliot Fu'
    }
  ]
}

const App = (props) => {
 
  return (
    <div>
      <PlaceHolder5Lines></PlaceHolder5Lines>
      <hr />
      <CountryMultipleSelect onChange={() => {}} defaultValue={['Benin']}></CountryMultipleSelect>
      <hr />
      <DropdownList placeholder={dropdown.placeHolder} options={dropdown.options} onChange={(e,data) => console.log(data)}></DropdownList>
    </div>
  )
}

ReactDOM.render(<App />, appElement);