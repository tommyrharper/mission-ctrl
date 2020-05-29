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
      </div>
    )
  }
}



export default GameComplete
