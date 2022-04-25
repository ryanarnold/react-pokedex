import React, { Component } from 'react'
import './css/info-panel.css';


export class InfoPanel extends Component {
  render() {
    return (
      <div id='infoPanel'>
        <div className='container-info'>
          <div id='infoPicDiv'>
            <img id='infoPic' src={require('./img/bulbasaur.webp')} alt='bulbasaur-pic'/>
          </div>
          <div>
            <div id='infoName'>Bulbasaur</div>
            <div id='infoKind'>Entrancing Pokemon</div>
            <div id='infoType'>Grass | Poison</div>
            <div id='infoHeight'>
              <div>Height</div>
              <div className='heightWeight'>5'1"</div>
            </div>
            <div id='infoWeight'>
              <div>Height</div>
              <div className='heightWeight'>10 lbs.</div>
            </div>
          </div>
        </div>
        <div id='infoTrivia'>
          Bulbasaur is the only POKEMON blah blah.
        </div>
      </div>
    )
  }
}

export default InfoPanel