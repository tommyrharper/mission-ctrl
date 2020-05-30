import React, { Component } from 'react'
import Scoreboard from './scoreboard.js'
import App from './app.js'

export class GameComplete extends Component {
  constructor() {
    super()
    this.state = {
      scoreSubmitted: false,
      tryAgain: false
    }
  }

  showScoreboard = () => {
    this.setState({ scoreSubmitted: true})
  }
  tryAgain = () => {
    this.setState({ tryAgain: true })
  }

  resetShowScoreboard = () => {
    this.setState({scoreSubmitted: false})
  }

  render() {
    let scoreboard
    let scoreSummary
    let tryAgainButton
    let app
    if(this.state.tryAgain) {
      app = <App/>
      this.resetShowScoreboard()
    }else if(this.state.scoreSubmitted) {
      scoreboard = <Scoreboard />
      tryAgainButton = <button onClick={this.tryAgain}>Try Again</button>
    }else {
      scoreSummary = <div>
      <p>Game Complete</p>
      <p>Total Correct: {this.props.correct}</p>
      <p>Total Mistakes: {this.props.mistakes}</p>
      Name:
      <input type="text"/>
      <button onClick={this.showScoreboard}>Submit score</button>
    </div>
    }
    return (
      <div>      
        {tryAgainButton}
        {scoreboard}
        {scoreSummary}
        {app}
      </div>
    )
  }
}

// render() {
//   let game
//   let button
//   let scoreboard
//   if (this.state.show) {
//     game = <Game />
//   } else {
//     button = <button onClick={this.startGame}>Start</button>
//     scoreboard = <Scoreboard />
//   }
//   return (
//     <div>
//       {button}
//       {game}
//       {scoreboard}
//     </div>
//   );
// }
// }

export default GameComplete
