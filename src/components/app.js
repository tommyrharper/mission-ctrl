import React, { Component } from "react";
import Game from "./game";
import Scoreboard from "./scoreboard";
import macShortcuts from "../shortcuts/mac";
import windowsShortcuts from "../shortcuts/windows";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      showGame: false,
      operatingSystem: "mac",
    };
  }

  startGame = () => {
    this.setState({ showGame: true });
  };

  chooseShortcuts = (set) => {
    this.setState({ operatingSystem: set });
  };

  render() {
    let shortcuts
    switch (this.state.operatingSystem) {
      case "mac":
        shortcuts = macShortcuts
        break;
    
      case "windows":
        shortcuts = windowsShortcuts
        break;
    
      default:
        break;
    }
    let game;
    let button;
    let scoreboard;
    let toggle;
    if (this.state.showGame) {
      game = <Game shortcuts={shortcuts} />;
    } else {
      toggle = (
        <div>
          <p>Please select your operating system:</p>
          <label for="mac">Mac</label>
          <input
            type="radio"
            id="mac"
            name="OS"
            value="mac"
            onClick={() => this.chooseShortcuts("mac")}
          />
          <label for="windows">Windows</label>
          <input
            type="radio"
            id="windows"
            name="OS"
            value="windows"
            onClick={() => this.chooseShortcuts("windows")}
          />
        </div>
      );
      button = <button onClick={this.startGame}>Start</button>;
      scoreboard = <Scoreboard />;
    }
    return (
      <div>
        <h1>Mission-Ctrl</h1>
        {toggle}
        {button}
        {game}
        {scoreboard}
      </div>
    );
  }
}

export default App;
