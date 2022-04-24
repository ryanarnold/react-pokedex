import React, { Component } from 'react'
import PokemonListItem from './PokemonListItem'

export class SearchPanel extends Component {

  cons

  render() {
    let pokemonList = [
      {
        name: 'Bulbasaur'
      },
      {
        name: 'Ivysaur'
      }
    ];
    
    return (
      <div>
        <div>
          <input type='text' placeholder='Search...'/>
        </div>
        <div>
          <PokemonListItem pokemonList={pokemonList}/>
        </div>
      </div>
    )
  }
}

export default SearchPanel