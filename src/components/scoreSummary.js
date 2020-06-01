import React, { Component } from 'react'

export class ScoreSummary extends Component {
  constructor(props){
    super(props)
  }
  calculateAccuracy = () => {
    return (this.props.totalCorrect / (this.props.totalCorrect + this.props.totalIncorrect)) * 100
  }
  render() {
    let accuracy = this.calculateAccuracy()
    return (
      <div>
        <h2>Score Summary</h2>
        <ul>
          <li>Your score: {this.props.score}</li>
          <li>Total Correct: {this.props.totalCorrect}</li>
          <li>Total Incorrect: {this.props.totalIncorrect}</li>
          <li>Round Accuracy: {accuracy}%</li>
        </ul>
      </div>
    )
  }
}

export default ScoreSummary

