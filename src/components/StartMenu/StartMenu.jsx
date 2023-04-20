import React from "react";

const StartMenu = ({ start }) => {
  return (
    <div className="start">
      <h1>Start Menu</h1>
      <section className="login">
        <h2>Register</h2>
        <p>...to save your progress, only username needed!</p>
        <form>
          <input
            type="text"
            name="user"
            id="user"
            cols="30"
            rows="10"
            placeholder="Name your warrior"
          />
          <br />
          <button>Enter</button>
        </form>
        <h2>Or load your game</h2>
        <p>...if you already have an account</p>
        <form>
          <input
            type="text"
            name="user"
            id="user"
            cols="30"
            rows="10"
            placeholder="Your warrior's name"
          />
          <br />
          <button>Enter</button>
        </form>
      </section>
      <button onClick={() => start("combat")}>Start Game</button>
    </div>
  );
};

export default StartMenu;
