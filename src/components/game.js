import React, { Component } from 'react'
import Question from './question'
import GameComplete from './gameComplete'
import Score from './score'
// added for timer 
import Timer from './timer'

export class Game extends Component {
  constructor(props) {
    super(props)
    this.initialState = {
      level: 0,
      totalErrors: 0,
      totalCorrect: 0,
      currentShortcut: 0,
      gameComplete: false,
      gameLength: 5000,
      failuresThisTurn: 0,
      resetScore: false
    }
    this.state = this.initialState
  }

  changeGameComplete = () => {
    this.setState({gameComplete: true})
  }

  componentDidMount = () => {
    console.log('this.props.shortcuts', this.props.shortcuts)
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
                  shortcut={this.props.shortcuts[this.state.currentShortcut]}
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
        <Timer 
        gameLength ={this.state.gameLength}/>
        
      </div>
    )
  }

  randomShortcut = () => {
    const shortcuts = this.props.shortcuts
    return Math.floor(Math.random() * shortcuts.length)
  }
}

export default Game
