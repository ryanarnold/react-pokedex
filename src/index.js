
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchPanel from './SearchPanel.js'

class App extends Component {
  render() {
    return (
      <SearchPanel/>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);