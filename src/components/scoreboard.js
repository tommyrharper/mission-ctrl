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
      content = scores.map((score) => (
        <ul>
          <li key={score._id}>
            {score.name} {moment(score.date).format("DD/MM/Y")} {score.score}
          </li>
        </ul>
      ));
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
