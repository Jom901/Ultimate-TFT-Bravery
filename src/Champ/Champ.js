import React from 'react';


const fixName = (champ) => {
  return champ.name.replace(/\'|\s/gi, '').toLowerCase();
};

const Champ = (props) => {
  let { char: champ } = props;
  return (
     <div className="champ">
       <img src={`${process.env.PUBLIC_URL}/champions/${fixName(champ)}.png`} />
     </div>
  );
};


export default Champ;
