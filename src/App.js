import "./App.css";
import React, { useEffect, useState } from "react";
import Engine from "./components/Engine/Engine";
import StartMenu from "./components/StartMenu/StartMenu";
import Ending from "./components/Ending/Ending";

function App() {
  const [gameState, setGameState] = useState("start");
  const [gameData, setGameData] = useState(
    localStorage.getItem("saveData") || []
  );

  const updateGame = (state) => {
    setGameState(state);
  };

  const saveGame = (data) => {
    localStorage.setItem(JSON.stringify("saveData", data));
  };

  const loadGame = () => {
    setGameData(localStorage.getItem("saveData"));
  };

  useEffect(() => {
    loadGame();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {gameState === "start" ? (
          <StartMenu save={saveGame} start={updateGame} />
        ) : null}
        {gameState === "combat" ? (
          <Engine data={gameData} save={saveGame} end={updateGame} />
        ) : null}
        {gameState === "gameOver" ? <Ending /> : null}
      </header>
    </div>
  );
}

export default App;
