import React from 'react';


const fixName = (champ) => {
  return champ.name.replace(/\'|\s/gi, '').toLowerCase();
};

const SynergyBlock = (props) => {
  let { synergy } = props;
  return (
     <div className="synergyBlock">
       <h1>{synergy.synergy}</h1>
       {synergy.champs.map(champ => <img src={`${process.env.PUBLIC_URL}/champions/${fixName(champ)}.png`} />)}
     </div>
  );
};


export default SynergyBlock;
