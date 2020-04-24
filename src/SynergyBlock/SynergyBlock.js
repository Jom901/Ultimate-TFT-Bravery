import React from "react";
import propTypes from "prop-types";

const fixName = (champ) => {
  return champ.name.replace(/'|\s/gi, "").toLowerCase();
};

const SynergyBlock = (props) => {
  let { synergy } = props;
  return (
    <div className="synergyBlock">
      <h1>{synergy.synergy}</h1>
      {synergy.champs.map((champ) => (
        <img
          key={champ.name}
          alt={champ.name}
          src={`${process.env.PUBLIC_URL}/champions/${fixName(champ)}.png`}
        />
      ))}
    </div>
  );
};
SynergyBlock.propTypes = {
  synergy: propTypes.object,
};
export default SynergyBlock;
