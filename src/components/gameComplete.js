import React, { Component } from 'react'
import Scoreboard from './scoreboard.js'
import App from './app.js'

export class GameComplete extends Component {
  constructor() {
    super()
    this.state = {
      scoreSubmitted: false
    }
  }

  showScoreboard = () => {
    this.setState({ scoreSubmitted: true})
  }

  render() {
    let scoreBoard
    let submitScore
    let tryAgainButton
    if (this.state.scoreSubmitted) {
      scoreBoard = <Scoreboard />
      tryAgainButton = <button onClick={this.props.tryAgain}>Try Again</button>
    } else {
      submitScore = <div>Name: <input type="text"/>
          <button onClick={this.showScoreboard}>Submit score</button>
        </div>
    }
    return (
      <div>
        <p>Game Complete</p>
        <p>Total Correct: {this.props.correct}</p>
        <p>Total Mistakes: {this.props.mistakes}</p>
        {submitScore}
        {scoreBoard}
        {tryAgainButton}
      </div>
    )
  }
}

export default GameComplete
