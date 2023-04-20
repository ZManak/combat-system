import React, { useState, useEffect } from "react";

function Engine({ end }) {
  const [playerHealth, setPlayerHealth] = useState(500);
  const [playerMana, setPlayerMana] = useState(20);
  const [playerAttack, setPlayerAttack] = useState(10);
  const [playerDefense, setPlayerDefense] = useState(5);
  const [playerBlock, setPlayerBlock] = useState(false);
  const [playerPoison, setPlayerPoison] = useState(false);
  const [playerConfuse, setPlayerConfuse] = useState(false);
  const [enemyBlock, setEnemyBlock] = useState(false);
  const [enemyPoison, setEnemyPoison] = useState(false);
  const [enemyStun, setEnemyStun] = useState(false);

  const [enemies, setEnemies] = useState([
    { id: 1, name: "Orco", health: 50, attack: 10 },
    { id: 2, name: "Goblin", health: 30, attack: 8 },
    { id: 3, name: "Troll", health: 80, attack: 12 },
  ]);
  const [playerTurn, setPlayerTurn] = useState(false);
  const [currentEnemyTurn, setCurrentEnemyTurn] = useState(0);
  const [isCombatOver, setIsCombatOver] = useState(false);
  //console.log(enemies);

  function attackEnemy(chosenEnemy) {
    const damage = Math.floor(Math.random() * 10) + playerAttack; // Daño entre 1 y 10
    if (playerConfuse) {
      setPlayerHealth(
        Math.random() < 0.5
          ? playerHealth - (damage + (playerPoison ? 2 : 0))
          : playerHealth - (playerPoison ? 2 : 0)
      );
      setPlayerMana(playerMana + 1);
      setPlayerConfuse(false);
    } else {
      chosenEnemy.health =
        chosenEnemy.health - (enemyBlock ? damage / 2 : damage);
      setPlayerHealth(playerHealth - (playerPoison ? 2 : 0));
      setEnemyBlock(false);
    }
    setPlayerTurn(false);
  }

  function attackPlayer(currentEnemy) {
    const damage = currentEnemy.attack; // Daño entre 1 y 8
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

  /*   function stun() {
    if (playerMana >= 5 && enemyStun === false && enemyBlock === true) {
      setPlayerMana(playerMana - 5);
      setEnemyHealth(enemyHealth - (Math.floor(Math.random() * 3) + 1));
      setPlayerHealth(playerHealth - (playerPoison ? 2 : 0));
      setEnemyBlock(false);
      setEnemyStun(true);
    }
  } */

  function block() {
    setPlayerBlock(true);
  }

  function handleEnemyClick(enemy) {
    attackEnemy(enemy);
  }

  useEffect(() => {
    if (playerHealth <= 0) {
      setIsCombatOver(true);
    } else if (enemies.length >= 1) {
      let remainingEnemies = enemies.filter((enemy) => enemy.health > 0);
      setEnemies(remainingEnemies);
    }
    if (enemies.length === 0) {
      setIsCombatOver(true);
    } else if (playerTurn === false) {
      const currentEnemy = enemies[currentEnemyTurn];
      const enemyAction = Math.floor(Math.random() * 2); // 0 = Atacar, 1 = Bloquear
      if (enemyAction === 0) {
        attackPlayer(currentEnemy);
        setPlayerTurn(true);
      } else {
        setEnemyBlock(true);
        setPlayerTurn(true);
      }
      console.log(enemies);
    }
  }, [playerTurn]);
  /* if (playerHealth <= 0) {
      setIsCombatOver(true);
    } else {
      setCurrentEnemyTurn((currentEnemyTurn + 1) % enemies.length);
    }
    console.log("Turno del jugador: ", playerTurn);
    console.log("Turno del enemigo: ", currentEnemyTurn);
    console.log("Enemigos: ", enemies);
  }, [enemies]); */

  return (
    <div className="battleScreen">
      <h2>Jugador</h2>
      <p>Salud: {playerHealth}</p>
      <p>Mana: {playerMana}</p>
      <p>Envenenado: {playerPoison ? "Si" : "No"}</p>
      <p>Bloquea: {playerBlock ? "Si" : "No"}</p>
      {/* {playerConfuse ? <p>Confundido</p> : null}
      <button onClick={attackEnemy(currentEnemy)}>Atacar</button>
      <button onClick={block}>Bloquear</button> */}
      {/* <button onClick={stun}>Aturdir</button> */}
      <h2>Enemigos</h2>
      <section className="enemies">
        {Array.isArray(enemies) &&
          enemies.map((enemy, i) => (
            <div key={i}>
              <button
                onClick={() => handleEnemyClick(enemies[i])}
                key={enemy.id}
              >
                Atacar {enemy.name}
              </button>
              <p>Salud: {enemy.health}</p>
              <p>Ataque: {enemy.attack}</p>
              <p>Bloquea: {enemyBlock ? "Si" : "No"}</p>
              <p>Envenenado: {enemyPoison ? "Si" : "No"}</p>
              <p>Aturdido: {enemyStun ? "Si" : "No"}</p>
            </div>
          ))}
      </section>
      {isCombatOver ? (
        <button onClick={() => end("gameOver")}>Retry</button>
      ) : null}
    </div>
  );
}

export default Engine;
