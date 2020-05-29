import React, { Component } from 'react'

export class GameComplete extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <p>Game Complete</p>
        <p>Total Correct: {this.props.score}</p>
        <p>Total Mistakes: {this.props.mistakes}</p>
      </div>
    )
  }
}



export default GameComplete
