import React, { Component } from 'react'
import './css/pokemon-list-item.css';

export default class PokemonListItem extends Component {
  render() {
    return (
      this.props.pokemonList.map((pokemon) =>
        <div className='container-pokemon-list-item' key={pokemon.name}>
          <div className='item'><img src={require('./img/icons/' + pokemon.number + '.png')} alt='pokemon-icon' width='50' /></div>
          <div className='item'><p onClick={this.props.onClick}>{pokemon.name}</p></div>
        </div>
      )
    )
  }
}
