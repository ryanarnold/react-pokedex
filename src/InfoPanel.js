import React, { Component } from 'react'
import './css/info-panel.css';


export class InfoPanel extends Component {
  render() {
    return (
      <div id='infoPanel'>
        <div className='container-info'>
          <div id='infoPicDiv'>
            {/* <img id='infoPic' src={require('./img/bulbasaur.webp')} alt='bulbasaur-pic' /> */}
            {/* <img id='infoPic' src={require(this.props.currentPokemon.artwork)} alt='bulbasaur-pic' /> */}
            <img id='infoPic' src={this.props.currentPokemon.artwork} alt='bulbasaur-pic' />
          </div>
          <div>
            <div id='infoName'>{this.props.currentPokemon.name}</div>
            <div id='infoKind'>{this.props.currentPokemon.kind}</div>
            <div id='infoType'>{this.props.currentPokemon.type.map(type => 
              <img src={require(`./img/types/${type}.png`)} alt={type}/>
              )}</div>
            <div id='infoHeight'>
              <div>Height</div>
              <div className='heightWeight'>{this.props.currentPokemon.height} cm</div>
            </div>
            <div id='infoWeight'>
              <div>Height</div>
              <div className='heightWeight'>{this.props.currentPokemon.weight} g</div>
            </div>
          </div>
        </div>
        <div id='infoTrivia'>
          {this.props.currentPokemon.trivia}
        </div>
      </div>
    )
  }
}

export default InfoPanel