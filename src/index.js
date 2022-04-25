
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchPanel from './SearchPanel.js'
import './css/index.css';
import InfoPanel from './InfoPanel.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.updateInfoPanel = this.updateInfoPanel.bind(this);
  }

  updateInfoPanel(event) {
    console.log(event.target.innerHTML);
  }

  render() {
    return (
      <div className='container-app'>
        <div></div>
        <SearchPanel updateInfoPanel={this.updateInfoPanel} />
        <InfoPanel />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);