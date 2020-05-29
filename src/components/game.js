import React, { Component } from 'react'
import Question from './question'
import GameComplete from './gameComplete'
import Score from './score'

export class Game extends Component {
  constructor() {
    super()
    this.state = {
      level: 0,
      totalErrors: 0,
      totalCorrect: 0,
      shortcutSet: [
        { name: "Copy", combo: ['Control', 'c'] },
        { name: "Cut", combo: ['Control', 'x'] },
        { name: "Undo", combo: ['Control', 'z'] },
        { name: "Paste", combo: ['Control', 'v'] },
      ],
      currentShortcut: 0,
      gameComplete: false,
      gameLength: 2000,
      failuresThisTurn: 0,
      score: 0
    }
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({gameComplete: true})
    }, this.state.gameLength);
  }

  attempt = (correct) => {
    if (correct) {
      this.setState({
        totalCorrect: this.state.totalCorrect + 1,
        currentShortcut: this.randomShortcut(),
        failuresThisTurn: 0
      })
    } else {
      this.setState({
        totalErrors: this.state.totalErrors + 1,
        failuresThisTurn: this.state.failuresThisTurn + 1
      })
    }
  }

  render() {
    let gameCompleteComponent
    let questionComponent
    if (this.state.gameComplete) {
      gameCompleteComponent = <GameComplete 
                              correct={this.state.totalCorrect}
                              mistakes={this.state.totalErrors}
                              />
    } else {
      questionComponent = <Question 
                  shortcut={this.state.shortcutSet[this.state.currentShortcut]}
                  attempt={this.attempt}
                  />
    }
    return (
      <div>
        <h1>Mission-Ctrl</h1>
        <Score numberOfFailures={this.state.failuresThisTurn}/>
        {gameCompleteComponent}
        {questionComponent}
      </div>
    )
  }

  randomShortcut = () => {
    const shortcutSet = this.state.shortcutSet
    return Math.floor(Math.random() * shortcutSet.length)
  }
}

export default Game
