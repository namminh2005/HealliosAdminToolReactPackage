import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Modal } from '../../src'
import ReactModal from 'react-modal'

const appElement = document.getElementById('example');

ReactModal.setAppElement('#example');

const App = (props) => {
  const [isShow, setIsShow] = useState(false);
 
  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={() => setIsShow(!isShow)}>Open Modal</button>
      <Modal modalIsOpen={isShow} onRequestClose={() => setIsShow(false)} onRequestSave={() => setIsShow(false)}>
        <h4>Really long content...</h4>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, </p>
      </Modal>
    </div>
  )
}

ReactDOM.render(<App />, appElement);