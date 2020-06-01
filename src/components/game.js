import React, { Component } from 'react'
import Question from './question'
import GameComplete from './gameComplete'
import Score from './score'

export class Game extends Component {
  constructor(props) {
    super(props)
    this.initialState = {
      level: 0,
      totalErrors: 0,
      totalCorrect: 0,
      shortcutSet: this.props.shortcutSet,
      currentShortcut: 0,
      gameComplete: false,
      gameLength: 50000,
      failuresThisTurn: 0,
      resetScore: false
    }
    this.state = this.initialState
  }

  componentDidMount = () => {
    this.startGame()
  }

  startGame = () => {
    setTimeout(() => {
      this.setState({
        gameComplete: true
      })
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

  tryAgain = () => {
    this.setState(this.initialState)
    this.setState({
      resetScore: true
    })
    this.startGame()
  }

  gameRestarted = () => {
    this.setState({
      resetScore: false
    })
  }

  render() {
    let gameCompleteComponent
    let questionComponent
    if (this.state.gameComplete) {
      gameCompleteComponent = <GameComplete 
                              correct={this.state.totalCorrect}
                              mistakes={this.state.totalErrors}
                              tryAgain={this.tryAgain}
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
        <Score 
        totalFailures={this.state.totalErrors}
        failuresThisTurn={this.state.failuresThisTurn}
        numberOfCorrect={this.state.totalCorrect}
        resetScore={this.state.resetScore}
        gameRestarted={this.gameRestarted}
        />
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
