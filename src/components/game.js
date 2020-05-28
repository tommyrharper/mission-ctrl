import React, { Component } from 'react'

export class Game extends Component {
  constructor() {
    super()
      this.state = {
        level: 1,
        warning: "",
        numberFailures: 0
      }
  }
  correctAnswer = () => {
    let nextLevel = this.state.level + 1
    this.setState({
      level: nextLevel,
      warning: "",
      numberFailures: 0
    })
  }
  wrongAnswer = () => {
    let numberFailures = this.state.numberFailures + 1
    this.setState({
      warning: "Wrong",
      numberFailures: numberFailures
    })
  }
  render() {
    let warning = this.state.warning
    let level
    switch (this.state.level) {
      case 1:
        level = <p>Copy</p>
        break;
      case 2:
        level = <p>Paste</p>
        break;
      case 3:
        level = <p>Cut</p>
        break;
      default:
        level = <p>Game Complete</p>
    }
    return (
      <div>
        <p>Welcome to the Game</p>
        {level}
        <p>{warning}</p>
        <button onClick={this.correctAnswer}>Correct answer</button>
        <button onClick={this.wrongAnswer}>Wrong answer</button>
      </div>
    )
  }
}

export default Game
