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
      shortcuts: macShortcuts,
    };
  }

  startGame = () => {
    this.setState({ showGame: true });
  };

  chooseShortcuts = (set) => {
    switch (set) {
      case "mac":
        this.setState({shortcuts: macShortcuts})
        break;
    
      case "windows":
        this.setState({shortcuts: windowsShortcuts})
        break;

      default:
        break;
    }
  };

  render() {
    if (this.state.showGame) {
      return (
        <Game shortcuts={this.state.shortcuts} />
      )
    } else {
      return (
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
          <button onClick={this.startGame}>Start</button>
          <Scoreboard />
        </div>
      );
    }
  }
}

export default App;

