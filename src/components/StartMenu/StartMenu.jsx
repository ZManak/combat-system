import React from "react";

const StartMenu = ({ start }) => {
  const setStats = () => {
  
  return (
    <div className="start">
      <h1>Start Menu</h1>
      <section className="playerInfo">
        <h2>Who is your warrior?</h2>
        <form>
          <label htmlFor="user">Name:</label>
          <input
            type="text"
            name="user"
            id="user"
            cols="30"
            rows="10"
            placeholder="Name your warrior"
          />
          <br />
          <label htmlFor="class">...a brave...</label>
          <select name="class" id="class">
            <option value="warrior">Warrior</option>
            <option value="mage">Mage</option>
            <option value="rogue">Rogue</option>
          </select>
          <br />
          <input type="submit" value="SET" onClick={setStats()}/>
        </form>
      </section>
      <button onClick={() => start("combat")}>Start Game</button>
    </div>
  );
};

export default StartMenu;
