import "./App.css";
import React, { useState } from "react";
import Engine from "./components/Engine/Engine";
import StartMenu from "./components/StartMenu/StartMenu";
import Ending from "./components/Ending/Ending";

function App() {
  const [gameState, setGameState] = useState("start");

  const updateGame = (state) => {
    setGameState(state);
  };

  return (
    <div className="App">
      <header className="App-header">
        {gameState === "start" ? <StartMenu start={updateGame} /> : null}
        {gameState === "combat" ? <Engine end={updateGame} /> : null}
        {gameState === "gameOver" ? <Ending /> : null}
      </header>
    </div>
  );
}

export default App;
