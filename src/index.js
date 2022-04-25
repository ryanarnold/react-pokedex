
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchPanel from './SearchPanel.js'
import './css/index.css';
import InfoPanel from './InfoPanel.js';

class App extends Component {
  render() {
    return (
      <div className='container-app'>
        <div></div>
        <SearchPanel />
        <InfoPanel />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);