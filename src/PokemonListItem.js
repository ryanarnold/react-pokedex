import React, { Component } from 'react'
import Image from './img/icon-001-bulbasaur.png';
import './css/pokemon-list-item.css';

export default class PokemonListItem extends Component {
  render() {
    return (
      this.props.pokemonList.map((pokemon) =>
        <div className="container">
          <div className="item"><img src={require('./img/icons/' + pokemon.number + '.png')} alt='bulbasaur-icon' width='50' /></div>
          <div className="item"><p>{pokemon.name}</p></div>
        </div>
      )
    )
  }
}
