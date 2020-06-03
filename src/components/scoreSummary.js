import React, { Component } from 'react'

export class ScoreSummary extends Component {
  calculateAccuracy = () => {
    return ((this.props.totalCorrect / (this.props.totalCorrect + this.props.totalIncorrect)) * 100).toFixed(2)
  }
  calculateSpeed = () => {
    return ((this.props.gameLength/this.props.totalCorrect)/1000).toFixed(2);
  }
  render() {
    let accuracy = this.calculateAccuracy()
    let speed = this.calculateSpeed()
    return (
      <table>
        <tbody>
          <tr>
            <td>Score:</td>
            <td>{this.props.score}</td>
          </tr>
          <tr>
            <td>Total Correct:</td>
            <td>{this.props.totalCorrect}</td>
          </tr>
          <tr>
            <td>Total Incorrect:</td>
            <td>{this.props.totalIncorrect}</td>
          </tr>
          <tr>
            <td>Round Accuracy:</td>
            <td>{accuracy}</td>
          </tr>
          <tr>
            <td>Average speed:</td>
            <td>{speed} seconds/question</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default ScoreSummary
