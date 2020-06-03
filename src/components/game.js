import React, { Component } from "react";
import Question from "./question";
import ScoreSummary from "./scoreSummary";
import Scoreboard from "./scoreboard";
import Timer from "./timer";
import ScoreForm from "./scoreForm";

export class Game extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      scoreIndication: null,
      formSent: false,
      totalIncorrect: 0,
      totalCorrect: 0,
      currentShortcut: 0,
      gameComplete: false,
      gameLength: 10000,
      score: 0,
    };
    this.state = this.initialState;
  }

  questionComplete = (score, incorrectAttempts) => {
    this.scoreIndication(score);
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

  formSent = (id) => {
    this.setState({
      formSent: true,
      scoreId: id,
    });
  };

  scoreIndication = (score) => {
    this.setState({
      scoreIndication: null
    });
    this.setState({
      scoreIndication: score,
    })
  }

  render() {
    const scoreIndication = this.state.scoreIndication ? (
      <span className="score-indication"> + {this.state.scoreIndication}</span>
    ) : null;
    const tryAgain = (
      <button className="btn" onClick={this.tryAgain}>
        Try Again
      </button>
    );
    if (this.state.gameComplete && !this.state.formSent) {
      return (
        <div>
          <ScoreSummary
            score={this.state.score}
            totalCorrect={this.state.totalCorrect}
            totalIncorrect={this.state.totalIncorrect}
            gameLength={this.state.gameLength}
          />
          <ScoreForm score={this.state.score} formSent={this.formSent} />
          {tryAgain}
        </div>
      );
    } else if (this.state.formSent) {
      return (
        <div>
          <ScoreSummary
            score={this.state.score}
            totalCorrect={this.state.totalCorrect}
            totalIncorrect={this.state.totalIncorrect}
            gameLength={this.state.gameLength}
          />
          {tryAgain}
          <Scoreboard scoreId={this.state.scoreId} />
        </div>
      );
    } else {
      return (
        <div>
          <Timer
            gameLength={this.state.gameLength}
            complete={this.completeGame}
          />
          <p>
            Score: {this.state.score} {scoreIndication}{" "}
          </p>
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
