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

  // delHeader = () => {
  //   this.setState({show: false});
  // }

  render() {
    let game
    if ( this.state.show) {
      game = <Game />
    }
    return (
      <div>
        <button onClick={this.startGame}>Start</button>
        {game}
      </div>
    )
  }
}

export default App
