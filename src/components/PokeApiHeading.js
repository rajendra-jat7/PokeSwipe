import React from 'react';
import './PokeApiHeading.css';

const PokeApiHeading = () => {
  const title = 'PokéApi';

  return (
    <div className="pokeapi-heading">
      {title.split('').map((char, index) => (
        <span key={index} className="pokeapi-char">{char}</span>
      ))}
    </div>
  );
};

export default PokeApiHeading;
