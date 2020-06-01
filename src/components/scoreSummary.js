import React, { Component } from 'react'

export class scoreSummary extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <h2>Score Summary</h2>
        <li>Your score: {this.props.score}</li>
        <li>Total Correct: {this.props.totalCorrect}</li>
        <li>Total Incorrect: {this.props.totalIncorrect}</li>
        <li>Round Accuracy: {
        (this.props.totalCorrect / (this.props.totalCorrect + this.props.totalIncorrect)) * 100}%
        </li>
      </div>
    )
  }
}

export default scoreSummary

