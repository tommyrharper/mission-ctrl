import React, { Component } from "react";

export class Scoreboard extends Component {
  constructor() {
    super()
    this.state = {
      scores: [{"name": "Alex", "date":"29/05/20", "score": 10000 }, {"name": "Graham", "date":"29/05/20", "score": 20000 }]
    }
  }

  render() {
    let unsortedScores = this.state.scores
    let sortedScores = unsortedScores.sort(function (a, b) {
    return b.score - a.score
    })

    const scoresPrint = sortedScores.map((score) => <li key={score.name}>{score.name} {score.date} {score.score}</li>)

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
