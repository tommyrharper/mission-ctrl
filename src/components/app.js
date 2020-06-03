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
      shortcuts: macShortcuts
    };
  }

  componentDidMount = () => {
    if (navigator.platform.includes("Mac")) {
      this.setState({
        autoDetectedOS: true,
        shortcuts: macShortcuts
      })
    } else {
      this.setState({shortcuts: windowsShortcuts})
    }
  }

  startGame = () => {
    this.setState({ showGame: true });
  };

  render() {
    let button = <button onClick={this.Again}>Home</button>
    if (this.state.showGame) {
      return (
        <div>
          <Game shortcuts={this.state.shortcuts} />
          {button}
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={this.startGame}>Start</button>
          <Scoreboard />
        </div>
      )
    }
  }
}

export default App;

