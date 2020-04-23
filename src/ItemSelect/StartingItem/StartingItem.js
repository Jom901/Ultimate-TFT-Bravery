import React from 'react';

const StartingItem = (props) => {
  let { baseItem, handleClick } = props;
  
  const handleLocalClick = event => handleClick(baseItem);

  return (
    <img onClick={handleLocalClick} src={`${process.env.PUBLIC_URL}/items/${baseItem}.png`} />
  )
};

export default StartingItem;