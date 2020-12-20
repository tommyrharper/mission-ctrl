import React, { Component } from "react";
import Game from "./game";
import Scoreboard from "./scoreboard";
import macShortcuts from "../shortcuts/mac";
import macShortcutsEasy from "../shortcuts/macEasy";
import windowsShortcuts from "../shortcuts/windows";
import windowsShortcutsEasy from "../shortcuts/windowsEasy";
import ShortcutPreview from "./shortcutPreview";

const SHORTCUTS = {
  mac: {
    easy: macShortcutsEasy,
    medium: macShortcuts,
    hard: macShortcuts
  },
  windows: {
    easy: windowsShortcutsEasy,
    medium: windowsShortcuts,
    hard: windowsShortcuts
  }
}

export class App extends Component {
  constructor() {
    super();
    this.state = {
      showGame: false,
      shortcuts: macShortcuts,
      showScoreboard: true,
      difficulty: 'medium',
      operatingSystem: 'mac'
    };
  }

  componentDidMount = () => {
    if (navigator.platform.includes("Mac")) {
      this.setState({
        operatingSystem: 'mac',
        shortcuts: macShortcuts,
      });
    } else {
      this.setState({
        operatingSystem: 'windows',
        shortcuts: windowsShortcuts 
      });
    }
  };

  startGame = () => {
    this.setState({ showGame: true });
  };

  sendToHome = () => {
    this.setState({ showGame: false });
  };

  toggleScoreboard = () => {
    this.setState({
      showScoreboard: !this.state.showScoreboard
    })
  }

  changeDifficulty = (difficulty) => {
    const { operatingSystem } = this.state;
    this.setState({
      difficulty: difficulty,
      shortcuts: SHORTCUTS[operatingSystem][difficulty],
    });
  }

  getButtonClass = (difficulty) => (this.state.difficulty === difficulty) ? 'btn selectedDificulty' : 'btn';

  render() {
    let table = this.state.showScoreboard ? (
      <Scoreboard />
    ) : (
      <ShortcutPreview shortcuts={this.state.shortcuts} />
    );
    let tableToggle = this.state.showScoreboard ? "Show shortcuts list" : "Show scoreboard"

    if (this.state.showGame) {
      return (
        <div className="container">
          <header>
            <h1>
              MISSION<span>CTRL</span>
            </h1>
            <button id="home" className="btn" onClick={this.sendToHome}>
              Home
            </button>
          </header>
          <Game shortcuts={this.state.shortcuts} />
        </div>
      );
    } else {
      return (
        <div className="container">
          <h1>
            MISSION<span>CTRL</span>
          </h1>
          <div style={{marginBottom: '10px'}}>
            <p>Welcome, pilot.</p>
            <p>
              Your mission is to get as far as you can by entering correct
              keyboard shortcuts.
            </p>
            <p>Ready for blast off?</p>
            <button id="start"
              className={this.getButtonClass('easy')}
              onClick={() => this.changeDifficulty('easy')}>
              EASY
            </button>
            <button id="start"
              className={this.getButtonClass('medium')}
              onClick={() => this.changeDifficulty('medium')}>
              MEDIUM
            </button>
            <button id="start"
              className={this.getButtonClass('hard')}
              onClick={() => this.changeDifficulty('hard')}>
              HARD
            </button>
          </div>
          <button id="start" className="btn" onClick={this.startGame}>
            Start
          </button>
          <button className="btn" onClick={this.toggleScoreboard}>
            {tableToggle}
          </button>
          {table}
        </div>
      );
    }
  }
}

export default App;
