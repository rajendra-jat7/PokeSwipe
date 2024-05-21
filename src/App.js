import React, { useState } from 'react';
import './App.css';
import WelcomeScreen from './components/WelcomeScreen';
import PokeCard from './components/PokeCard';
import LikedPokemonPage from './components/LikedPokemonPage';
import PokeApiHeading from './components/PokeApiHeading';

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [likedPokemon, setLikedPokemon] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const startApp = () => {
    setIsStarted(true);
  };

  const handleLike = (pokemon) => {
    setLikedPokemon([...likedPokemon, pokemon]);
  };

  const handleDislike = () => {
    // Fetch another random Pokemon
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <PokeApiHeading />
      {isStarted ? (
        <>
          <PokeCard onLike={handleLike} onDislike={handleDislike} isDarkMode={isDarkMode} />
          <LikedPokemonPage likedPokemon={likedPokemon} isDarkMode={isDarkMode} />
        </>
      ) : (
        <WelcomeScreen onStart={startApp} isDarkMode={isDarkMode} />
      )}
      <button onClick={toggleDarkMode} className="dark-mode-button">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
  );
}

export default App;
