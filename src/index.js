
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { default as PokemonListItem } from './PokemonListItem.js'

class App extends Component {
  render() {
    return (
      <PokemonListItem/>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);