import React from "react";
import PropTypes from "prop-types";

const StartingItem = (props) => {
  let { baseItem, handleClick, active } = props;

  const handleLocalClick = () => handleClick(baseItem);
  return (
    <img
      className={active ? "activeStartingItem" : "startingItem"}
      alt={props.itemName}
      onClick={handleLocalClick}
      src={`${process.env.PUBLIC_URL}/items/${baseItem}.png`}
    />
  );
};

StartingItem.propTypes = {
  itemName: PropTypes.string,
  baseItem: PropTypes.string,
  handleClick: PropTypes.func,
  active: PropTypes.bool,
};

export default StartingItem;
