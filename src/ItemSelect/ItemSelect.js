import React, { Component } from "react";
import StartingItem from "./StartingItem/StartingItem.js";
import items from "./set3/items.json";
import itemTransformations from "./set3/itemTransformations.json";

class ItemSelect extends Component {
  
  state = { generatedItemTag: null };
  
  getItemDetails(id) {
    return items.filter((item) => item.id === parseInt(id))[0].name;
  }

  handleStartingItemClick(id) {
    let randomItem =
      itemTransformations[id][
        Math.floor(Math.random() * 50) % itemTransformations[id].length
      ];
    let name = this.getItemDetails(randomItem);
    let generatedItemTag = (
      <div className="randomizedItem">
        <h1>You must build this item!</h1>
        <img
          className="randomizedItemImg"
          alt={name}
          src={`${process.env.PUBLIC_URL}/items/${randomItem}.png`}
        />
      </div>
    );
    this.setState({ generatedItemTag: generatedItemTag });
  }

  render() {
    return (
      <div className="itemSelect">
        <div className="startingItems">
          <h1>What item did your starting champion have?</h1>
          <div>
            {Object.keys(itemTransformations).map((baseItem) => (
              <StartingItem
                itemName={this.getItemDetails(baseItem)}
                key={baseItem}
                handleClick={this.handleStartingItemClick.bind(this)}
                baseItem={baseItem}
              />
            ))}
          </div>
        </div>
        {this.state.generatedItemTag}
      </div>
    );
  }
}

export default ItemSelect;
