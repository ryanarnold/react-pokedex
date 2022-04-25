
import React, { Component, useCallback, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';
import SearchPanel from './SearchPanel.js'
import './css/index.css';
import InfoPanel from './InfoPanel.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPokemon: {
        name: 'Bulbasaur',
        kind: 'Bulb Pokemon',
        type: ['grass', 'poison'],
        height: '4',
        weight: '10',
        trivia: 'Bulbasaur is a pokemon',
        artwork: './img/bulbasaur.webp'
      }
    }

    this.updateInfoPanel = this.updateInfoPanel.bind(this);
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  updateInfoPanel(event) {
    const pokemonName = event.target.innerHTML;

    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => {
        const pokemonData = response.data;

        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`)
          .then(response => {
            const speciesData = response.data;

            const types = pokemonData.types.map(type => {
              return type.type.name;
            })

            const english_flavor_text = speciesData.flavor_text_entries.find(entry => {
              return entry.language.name === 'en'
            });

            this.setState({
              currentPokemon: {
                name: this.capitalizeFirstLetter(pokemonName),
                kind: speciesData.genera[7].genus,
                type: types,
                height: pokemonData.height,
                weight: pokemonData.weight,
                trivia: english_flavor_text.flavor_text,
                artwork: pokemonData.sprites.other['official-artwork'].front_default
              }
            });
          });
      });
  }

  render() {
    return (
      <div className='container-app'>
        <div></div>
        <SearchPanel updateInfoPanel={this.updateInfoPanel} />
        <InfoPanel currentPokemon={this.state.currentPokemon} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);