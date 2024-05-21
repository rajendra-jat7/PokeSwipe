import React from 'react';
import HeartIcon from './HeartIcon';
import './WelcomeScreen.css';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="pokecard welcome-screen">
      <HeartIcon/>
      <br />
      <h1>How to Play PokéSwipe</h1>
      <br />
      <p>Pokémon Appear one at a Time Choose "Like" or "Dislike" Build Your Favorite Team</p>
      <button onClick={onStart}>Let's Go!</button>
    </div>
  );
};

export default WelcomeScreen;
