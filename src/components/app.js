import React, { Component } from "react";
import Game from "./game";
import Scoreboard from "./scoreboard"

export class App extends Component {
  constructor() {
    super();
    this.state = { show: false }
  }

  startGame = () => {
    this.setState({ show: true })
  };

  render() {
    let game
    let button
    let scoreboard
    if (this.state.show) {
      game = <Game />
    } else {
      button = <button onClick={this.startGame}>Start</button>
      scoreboard = <Scoreboard />
    }
    return (
      <div>
        {button}
        {game}
        {scoreboard}
      </div>
    );
  }
}

export default App;

