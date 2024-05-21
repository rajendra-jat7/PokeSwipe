import React from 'react';
import axios from 'axios';
import './PokeCard.css';

const PokeCard = ({ onLike, onDislike, isDarkMode }) => {
  const [pokemon, setPokemon] = React.useState(null);

  React.useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    const randomId = Math.floor(Math.random() * 898) + 1;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    setPokemon(response.data);
  };

  const handleLike = () => {
    onLike(pokemon);
    fetchPokemon();
  };

  const handleDislike = () => {
    onDislike();
    fetchPokemon();
  };

  return (
    <div className={`pokecard ${isDarkMode ? 'dark-mode' : ''}`}>
      {pokemon && (
        <>
          <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
          <h2>{pokemon.name}</h2>
          <p>{pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
          <p>{pokemon.types.map(type => type.type.name).join(', ')}</p>
          <div className="buttons">
            <button onClick={handleLike} style={{ backgroundColor: isDarkMode ? 'green' : '#ffcb05' }}>Like</button>
            <button onClick={handleDislike} style={{ backgroundColor: isDarkMode ? 'red' : '#ffcb05' }}>Dislike</button>
          </div>
        </>
      )}
    </div>
  );
};

export default PokeCard;
