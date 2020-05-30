import React, { Component } from 'react'

export class Score extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0
    }
  }

  static getDerivedStateFromProps(props, state) {
    
    if (props.failuresThisTurn === 0 && props.numberOfCorrect === 1) {
      return {
        score: state.score + 5
      };
      
    }
   
    // Return null to indicate no change to state.
    return null;
  }

  render() {
    return (
      <div>
        <p>Score: {this.state.score}</p>
      </div>
    )
  }
}

export default Score
