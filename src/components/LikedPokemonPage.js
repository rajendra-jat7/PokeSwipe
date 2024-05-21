import React from 'react';
import './LikedPokemonPage.css';

const LikedPokemonPage = ({ likedPokemon, isDarkMode }) => {
  return (
    <div className={`liked-pokemon-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <h3>Liked Pokémon</h3>
      <div className="liked-pokemon-list">
        {likedPokemon.map((pokemon, index) => (
          <div key={index} className="liked-pokemon-card">
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
            <h4>{pokemon.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedPokemonPage;
