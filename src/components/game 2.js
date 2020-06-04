import React, { Component } from 'react'
import Question from './question'
import GameComplete from './gameComplete'
import Score from './score'
import ScoreForm from './scoreForm'

export class Game extends Component {
  constructor() {
    super()
    this.initialState = {
      score: 0,
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
      gameLength: 5000,
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
    let scoreFormComponent
    if (this.state.gameComplete) {
      gameCompleteComponent = <GameComplete 
                              correct={this.state.totalCorrect}
                              mistakes={this.state.totalErrors}
                              tryAgain={this.tryAgain}
                              />
      scoreFormComponent = <ScoreForm score={this.state.score}/>
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
        {scoreFormComponent}
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