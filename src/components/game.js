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
      gameLength: 10000,
      failuresThisTurn: 0,
      isAnswerCorrect: true
    }
  }

  componentDidMount = () => {
    this.startGame()
  }

  startGame = () => {
    setTimeout(() => {
      this.setState({gameComplete: true})
    }, this.state.gameLength);
  }

  attempt = (correct) => {
    if (correct) {
      this.setState({
        totalCorrect: this.state.totalCorrect + 1,
        currentShortcut: this.randomShortcut(),
        failuresThisTurn: 0,
        isAnswerCorrect: true
      })
    } else {
      this.setState({
        totalErrors: this.state.totalErrors + 1,
        failuresThisTurn: this.state.failuresThisTurn + 1,
        isAnswerCorrect: false
      })
    }
  }

  tryAgain = () => {
    this.setState({gameComplete: false})
    this.startGame()
  }

  render() {
    let gameCompleteComponent
    let questionComponent
    let feedback
    let giveAnswer
    if (this.state.isAnswerCorrect === false && this.state.gameComplete === false && this.state.failuresThisTurn > 2) {
      giveAnswer = <p>The Answer is {this.correctAnswer()}</p>
    }
    if (this.state.isAnswerCorrect === false && this.state.gameComplete === false) {
      feedback = <p>Try Again</p>
    }
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
        />
        {gameCompleteComponent}
        {questionComponent}
        {feedback}
        {giveAnswer}
      </div>
    )
  }

  correctAnswer = () => {
    const answer = this.state.shortcutSet[this.state.currentShortcut].combo.join(" ")
    return answer
  }

  randomShortcut = () => {
    const shortcutSet = this.state.shortcutSet
    return Math.floor(Math.random() * shortcutSet.length)
  }
}

export default Game
