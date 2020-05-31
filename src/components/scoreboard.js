import React, { Component } from "react";
var moment = require('moment');

export class Scoreboard extends Component {
  constructor() {
    super()
    this.state = {
      scores: []
    }
  }

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://mission-ctrl-node.herokuapp.com/scores";
    fetch(proxyurl + url)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result, 'result')
          this.setState({
            isLoaded: true,
            scores: result
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render() {
    const scores = this.state.scores
    const scoresPrint = scores.map((score) => <li key={score.name}>{score.name} {moment(score.date).format('DD-M-Y')} {score.score}</li>)
    return (
      <div>
        <h2>Scoreboard</h2>
        <ul>
          {scoresPrint}
        </ul>
      </div>
    )
  }
}

export default Scoreboard
