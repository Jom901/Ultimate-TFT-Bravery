import React, { Component } from "react";
import StartingItem from "./StartingItem/StartingItem.js";
import items from "./set3/items.json";
import itemTransformations from "./set3/itemTransformations.json";

class ItemSelect extends Component {
  state = {
    generatedItemTag: null,
    selectionStatus: {
      "01": false,
      "02": false,
      "03": false,
      "04": false,
      "05": false,
      "06": false,
      "07": false,
      "08": false,
      "09": false,
    },
  };

  getItemDetails(id) {
    return items.filter((item) => item.id === parseInt(id))[0].name;
  }

  setStartingItemSelection(id) {
    let { selectionStatus } = this.state;
    Object.keys(selectionStatus).forEach(
      (item) => (selectionStatus[item] = false)
    );
    selectionStatus[id] = true;
    return selectionStatus;
  }

  handleStartingItemClick(id) {
    let randomItem =
      itemTransformations[id][
        Math.floor(Math.random() * 50) % itemTransformations[id].length
      ];

    let generatedItemTag = (
      <div className="randomizedItem">
        <h1>You must build this item!</h1>
        <img
          className="randomizedItemImg"
          alt={this.getItemDetails(randomItem)}
          src={`${process.env.PUBLIC_URL}/items/${randomItem}.png`}
        />
      </div>
    );
    this.setState({
      generatedItemTag: generatedItemTag,
      selectionStatus: this.setStartingItemSelection(id),
    });
  }

  render() {
    return (
      <div className="itemSelect">
        <div className="startingItems">
          <h1>What item did your starting champion have?</h1>
          <div>
            {Object.keys(itemTransformations).map((baseItem) => (
              <StartingItem
                active={this.state.selectionStatus[baseItem]}
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
