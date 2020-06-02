import React, { Component } from "react";
import Game from "./game";
import Scoreboard from "./scoreboard"
import ScoreForm from "./scoreForm"

export class App extends Component {
  constructor() {
    super();
    this.state = { 
      show: false,
      operatingSystem: "mac"
    }
  }

  startGame = () => {
    this.setState({ show: true })
  };

  chooseWindows = () => {
    this.setState({ operatingSystem: "windows" })
  }

  chooseMac = () => {
    this.setState({ operatingSystem: "mac" })
  }

  render() {
    let game
    let scoreboard
    let toggle
    let button
    if (this.state.show) {
      game = <Game operatingSystem={this.state.operatingSystem} />
    } else {
      toggle = <div>
                <p>Please select your operating system:</p>
                <input type="radio" id="mac" name="OS" value="mac" onClick={this.chooseMac}/>
                <label for="mac">Mac</label>
                <input type="radio" id="windows" name="OS" value="windows" onClick={this.chooseWindows}/>
                <label for="female">Windows</label>
               </div>
      button = <button onClick={this.startGame}>Start</button>
      scoreboard = <Scoreboard />
    }
    return (
      <div>
        <ScoreForm/>
        {toggle}
        {button}
        {game}
        {scoreboard}
      </div>
    );
  }
}

export default App;
