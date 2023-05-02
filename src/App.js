import React from 'react';
import cards from "./cards";
import Pokedex from './Pokedex'

function App() {
  return (
    <div className="App">
      <Pokedex cards={cards}/>
    </div>
  );
}

export default App;
