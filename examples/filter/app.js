import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Filter } from '../../src'
import ReactModal from 'react-modal'

const appElement = document.getElementById('example');

ReactModal.setAppElement('#example');

const App = (props) => {
  const [arrFilter, setArrFilter] = useState([
    {
      id: 1,
      text: 'Platform = iOS + Android'
    },
    {
      id: 2,
      text: 'Stream = com.Heallios.WerewolvesVoiceOnline'
    }
  ])

  const removeFilterRequest = (id) => {
    setArrFilter(_.filter(arrFilter, n => n.id != id));
  }

  const filterClickAdd = () => {
  }

  return (
    <div>
      <Filter arrFilter={arrFilter} removeRequest={removeFilterRequest} clickAdd={filterClickAdd}/>
    </div>
  )
}

ReactDOM.render(<App />, appElement);