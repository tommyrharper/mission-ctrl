import React, { Component } from 'react'
import Game from './game'

export class App extends Component {
  constructor() {
    super() 
      this.state = { show: false }
  }

  startGame = () => {
    this.setState({show: true })
  }

  render() {
    let game
    let button
    if ( this.state.show) {
      game = <Game />
    } else {
      button = <button onClick={this.startGame}>Start</button>
    }
    return (
      <div>
        {button}
        {game}
      </div>
    )
  }
}

export default App
