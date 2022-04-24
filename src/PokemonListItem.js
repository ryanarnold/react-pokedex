import React, { Component } from 'react'
import Image from './img/icon-001-bulbasaur.png';
import './css/pokemon-list-item.css';

export default class PokemonListItem extends Component {
  render() {
    return (
      <div className="container">
        <div className="item"><img src={Image} alt='bulbasaur-icon' width='50' /></div>
        <div className="item"><p>Bulbasaur</p></div>
      </div>
    )
  }
}
