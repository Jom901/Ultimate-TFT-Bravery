import React, { Component } from "react";
import SynergyBlock from "../SynergyBlock/SynergyBlock.js";
import champions from "./set3/champions.json";
import synergyList from "./set3/synergies.json";
class ChampCarousel extends Component {
  state = { synergies: [], rerollButtonText: "Generate Lineup" };

  generate() {
    let champPool = [...champions];
    let synergies = [...synergyList];
    let syn1 = synergies.splice(
      Math.floor(Math.random() * 50) % synergies.length,
      1
    )[0];
    let syn2 = synergies.splice(
      Math.floor(Math.random() * 50) % synergies.length,
      1
    )[0];
    let syn1Champs = champPool.filter((champ) => champ.traits.includes(syn1));
    let syn2Champs = champPool.filter((champ) => champ.traits.includes(syn2));

    this.setState({
      synergies: [
        { synergy: syn1, champs: syn1Champs },
        { synergy: syn2, champs: syn2Champs },
      ],
      rerollButtonText: "Reroll",
    });
  }

  render() {
    return (
      <div>
        <div className="rerollButtonDiv">
          <button className="rerollButton" onClick={this.generate.bind(this)}>
            {this.state.rerollButtonText}
          </button>
        </div>
        <div className="champLineup">
          {this.state.synergies.map((synergy) => (
            <SynergyBlock key={synergy.synergy} synergy={synergy} />
          ))}
        </div>
      </div>
    );
  }
}

export default ChampCarousel;
