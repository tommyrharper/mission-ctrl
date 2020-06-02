import React, { Component } from "react";
import Question from "./question";
import ScoreSummary from "./scoreSummary";
import Scoreboard from "./scoreboard";

export class Game extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      totalIncorrect: 0,
      totalCorrect: 0,
      currentShortcut: 0,
      gameComplete: false,
      gameLength: 5000,
      score: 0,
    };
    this.state = this.initialState;
  }

  questionComplete = (score, incorrectAttempts) => {
    this.setState({
      totalCorrect: this.state.totalCorrect + 1,
      totalIncorrect: this.state.totalIncorrect + incorrectAttempts,
      score: this.state.score + score,
      currentShortcut: this.randomShortcut(),
    });
  };

  completeGame = () => {
    this.setState({ gameComplete: true });
  };

  tryAgain = () => {
    this.setState(this.initialState);
  };

  formSent = () => {
    this.setState({ formSent: true });
  };

  render() {
    let tryAgain = <button onClick={this.tryAgain}>Try Again</button>;
    if (this.state.gameComplete && !this.state.formSent) {
      return (
        <div>
          {tryAgain}
          <ScoreSummary
            score={this.state.score}
            totalCorrect={this.state.totalCorrect}
            totalIncorrect={this.state.totalIncorrect}
            gameLength={this.state.gameLength}
          />
          {/* <ScoreForm score={this.state.score} formSent={this.formSent} /> */}
        </div>
      );
    } else if (this.state.formSent) {
      return (
        <div>
          {tryAgain}
          <ScoreSummary
            score={this.state.score}
            totalCorrect={this.state.totalCorrect}
            totalIncorrect={this.state.totalIncorrect}
            gameLength={this.state.gameLength}
          />
          <Scoreboard />
        </div>
      );
    } else {
      return (
        <div>
          {/* <Timer gameLength={this.state.gameLength} complete={this.completeGame}/> */}
          <p>Score: {this.state.score}</p>
          <Question
            shortcut={this.props.shortcuts[this.state.currentShortcut]}
            questionComplete={this.questionComplete}
          />
        </div>
      );
    }
  }

  randomShortcut = () => {
    const shortcuts = this.props.shortcuts;
    return Math.floor(Math.random() * shortcuts.length);
  };
}

export default Game;
