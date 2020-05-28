import React, { Component } from 'react'

export class Game extends Component {
  constructor() {
    super()
      this.state = {
        level: 1
      }
  }
  correctAnswer = () => {
    let nextLevel = this.state.level + 1
    this.setState({level: nextLevel})
  }
  wrongAnswer = () => {
    alert("WRONG!")
  }
  render() {
    let level
    if (this.state.level === 1) {
      level = <p>Copy</p>
    } else if (this.state.level === 2) {
      level = <p>Paste</p>
    } else if (this.state.level === 3) {
      level = <p>Cut</p>
    } else {
      level = <p>Game Complete</p>
    }
    return (
      <div>
        <p>Welcome to the Game</p>
        {level}
        <button onClick={this.correctAnswer}>Correct answer</button>
        <button onClick={this.wrongAnswer}>Wrong answer</button>
      </div>
    )
  }
}

export default Game
