import React, { Component } from "react";
var moment = require("moment");

export class Scoreboard extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      scores: [],
    };
  }

  componentDidMount() {
    const url = "http://mission-ctrl-node.herokuapp.com/scores";
    fetch(url)
      .then((result) => result.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            scores: result,
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, scores } = this.state;

    let content;
    if (error) {
      content = <h3>Could not load scores</h3>;
    } else if (!isLoaded) {
      content = <h3>Loading...</h3>;
    } else {
      const scoresMapped = scores.map((score, index) => (
        <tr className="score">
          <td>{index + 1}.</td>
          <td>{score.name}</td>
          <td>{moment(score.date).format("DD/MM/Y")}</td>
          <td>{score.score}</td>
        </tr>
      ));
      content = (
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {scoresMapped}
          </tbody>
        </table>
      );
    }
    return (
      <div>
        <h2>Scoreboard</h2>
        {content}
      </div>
    );
  }
}



export default Scoreboard;
