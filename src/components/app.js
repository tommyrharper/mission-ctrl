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
    if (this.state.showGame) {
      return (
        <Game shortcuts={this.state.shortcuts} />
      )
    } else {
      return (
        <div>
          <h1>MISSION<span>CTRL</span></h1>
          <div>
          <p>Welcome, pilot.</p>
          <p>Your mission is to get as far as you can by entering correct keyboard shortcuts.</p>
          <p>Ready for blast off?</p>
          </div>
          <button className="btn" onClick={this.startGame}>Start</button>
          <Scoreboard />
        </div>
      )
    }
  }
}

export default App;

