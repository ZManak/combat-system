import React, { useState } from "react";

function Engine() {
  const [playerHealth, setPlayerHealth] = useState(70);
  const [enemyHealth, setEnemyHealth] = useState(50);
  const [playerMana, setPlayerMana] = useState(20);
  const [playerBlock, setPlayerBlock] = useState(false);
  const [playerPoison, setPlayerPoison] = useState(false);
  const [playerConfuse, setPlayerConfuse] = useState(false);
  const [enemyBlock, setEnemyBlock] = useState(false);
  const [enemyPoison, setEnemyPoison] = useState(false);
  const [enemyStun, setEnemyStun] = useState(false);

  function attackEnemy() {
    const damage = Math.floor(Math.random() * 10) + 1; // Daño entre 1 y 10
    if (playerConfuse) {
      setPlayerHealth(
        Math.random() < 0.5
          ? playerHealth - (damage + (playerPoison ? 2 : 0))
          : playerHealth - (playerPoison ? 2 : 0)
      );
      setPlayerMana(playerMana + 1);
      setPlayerConfuse(false);
    } else {
      setEnemyHealth(enemyHealth - (enemyBlock ? damage / 2 : damage));
      setPlayerHealth(playerHealth - (playerPoison ? 2 : 0));
      setEnemyBlock(false);
    }
  }
  function attackPlayer() {
    const damage = Math.floor(Math.random() * 8) + 1; // Daño entre 1 y 8
    if (enemyStun) {
      setPlayerHealth(playerHealth - 0);
      setEnemyStun(false);
      setPlayerConfuse(Math.random() < 0.1 ? true : false);
    } else {
      setPlayerHealth(playerHealth - (playerBlock ? damage / 2 : damage));
      setPlayerPoison(true);
      setPlayerBlock(false);
      if (playerConfuse) {
        setPlayerConfuse(true);
      } else {
        setPlayerConfuse(Math.random() < 0.15 ? true : false);
      }
      setEnemyStun(false);
    }
  }

  function stun() {
    if (playerMana >= 5 && enemyStun === false && enemyBlock === true) {
      setPlayerMana(playerMana - 5);
      setEnemyHealth(enemyHealth - (Math.floor(Math.random() * 3) + 1));
      setPlayerHealth(playerHealth - (playerPoison ? 2 : 0));
      setEnemyBlock(false);
      setEnemyStun(true);
    }
  }

  function block() {
    setPlayerBlock(true);
  }

  return (
    <div>
      <h2>Jugador</h2>
      <p>Salud: {playerHealth}</p>
      <p>Mana: {playerMana}</p>
      <p>Envenenado: {playerPoison ? "Si" : "No"}</p>
      <p>Bloquea: {playerBlock ? "Si" : "No"}</p>
      {playerConfuse ? <p>Confundido</p> : null}
      <button onClick={attackEnemy}>Atacar</button>
      <button onClick={block}>Bloquear</button>
      <button onClick={stun}>Aturdir</button>
      <h2>Enemigo</h2>
      <p>Salud: {enemyHealth}</p>
      <p>Envenenado: {enemyPoison ? "Si" : "No"}</p>
      <p>Bloquea: {enemyBlock ? "Si" : "No"}</p>
      <p>Aturdido: {enemyStun ? "Si" : "No"}</p>
      <button onClick={attackPlayer}>Atacar</button>
      <button onClick={() => setEnemyBlock(true)}>Bloquear</button>
    </div>
  );
}

export default Engine;
