import React, { Component } from 'react'
import PokemonListItem from './PokemonListItem'
import pokemonList from './data/pokemonlist'

export class SearchPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemonList: pokemonList
    }
  }

  render() {
    return (
      <div>
        <div>
          <input type='text' placeholder='Search...' />
        </div>
        <div>
          <PokemonListItem pokemonList={pokemonList} />
        </div>
      </div>
    )
  }
}

export default SearchPanel