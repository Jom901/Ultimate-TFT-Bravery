import React, { Component } from 'react';
import StartingItem from './StartingItem/StartingItem.js';
import items from './set3/items.json';
import itemTransformations from './set3/itemTransformations.json';


class ItemSelect extends Component {
  state = {generatedItemTag: null};

  handleStartingItemClick(id) {
    let randomItem = itemTransformations[id][Math.floor(Math.random()*50)%itemTransformations[id].length];
    let generatedItemTag = (
    <div className='randomizedItem'>
      <h1>You must build this item!</h1>
      <img className='randomizedItemImg' src={`${process.env.PUBLIC_URL}/items/${randomItem}.png`} />
    </div>
    )
    this.setState({generatedItemTag: generatedItemTag});
  }


  render() {
    return (
      <div className='itemSelect'>
        <div className='startingItems'>
          <h1>What item did your starting champion have?</h1>
          <div>
            {Object.keys(itemTransformations).map( baseItem => <StartingItem handleClick={this.handleStartingItemClick.bind(this)} baseItem={baseItem}/>)}
          </div>
        </div>
          {this.state.generatedItemTag}
      </div>
    )
  }
}


export default ItemSelect;
