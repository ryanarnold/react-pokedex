import React, { Component } from 'react'
import PokemonListItem from './PokemonListItem'
import pokemonListComplete from './data/pokemonlist'
import './css/search-panel.css';

export class SearchPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemonList: pokemonListComplete,
      searchQuery: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
  }
  
  handleChange(event) {
    const searchQuery = event.target.value;

    const pokemonList = pokemonListComplete.filter(pokemon => pokemon.name.startsWith(searchQuery))

    this.setState({ searchQuery, pokemonList });
    console.log(this.state.searchQuery)
  }

  render() {
    return (
      <div>
        <div>
          <form>
            <input type='text' placeholder='Search...' onChange={this.handleChange} autoFocus/>
          </form>
        </div>
        <div id='searchPanel'>
          <PokemonListItem pokemonList={this.state.pokemonList} />
        </div>
      </div>
    )
  }
}

export default SearchPanel