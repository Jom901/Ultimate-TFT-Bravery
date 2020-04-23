import React, { Component } from 'react';
import Champ from '../Champ/Champ.js';
import champions from './set3/champions.json';
class ChampCarousel extends Component {
  state = {randomizedChampions: [], rerollButtonText: 'Generate Lineup'};

  generate() {
    let champPool = [...champions];
    let n = 9;
    const lineUp = [];
    while (n > 0) {
      lineUp.push(champPool[Math.floor(Math.random()*50)%champPool.length]);
      champPool = champPool.filter(champ => champ.name !== lineUp[lineUp.length-1].name)
      n--;
    }
    this.setState({randomizedChampions: lineUp, rerollButtonText: 'Reroll'});
  }

  render() {
    return (
      <div>
        <div className='rerollButtonDiv'>
          <button className='rerollButton' onClick={this.generate.bind(this)}>{this.state.rerollButtonText}</button>
        </div>
        <div className='champLineup'>
          {this.state.randomizedChampions.map(champ => <Champ key={champ.name} char={champ}/>)}
        </div>
        <div className='starting Item'>
          /* User selects item first picked on first carousel*/
          /* Item that can be generated from that first item is randomly selected */
        </div>
      </div>
    );
  }
}


export default ChampCarousel;
