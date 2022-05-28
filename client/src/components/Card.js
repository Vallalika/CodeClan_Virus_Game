import { useState, useEffect } from 'react';

const Card = ({cards, setCards}) => {
    

  return (
    <div className="card-display">
      <p>{cards.name}</p>
      <p>{cards.type}</p>
      <p>{cards.invulnerable}</p>
      <p>{cards._id}</p>
      <p>{cards.score}</p>
            
    </div>
  )
};

export default Card;