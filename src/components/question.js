import React, { Component } from "react";
import QuestionFeedback from "./questionFeedback";

const INITIAL_SCORE = 5;
const SCORE_DECREMENT = 2;

export class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentKeys: [],
      score: INITIAL_SCORE,
      incorrectAttempts: 0,
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyDown);
    document.addEventListener("keyup", this.keyUp);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyDown);
    document.removeEventListener("keyup", this.keyUp);
  }

  keyDown = (e) => {
    e.preventDefault();
    if (!e.repeat) {
      const newKeys = [...this.state.currentKeys, e.key];
      this.setState({
        currentKeys: newKeys,
      });
      if (newKeys.length === this.props.shortcut.combo.length) {
        if (this.compareArrays(newKeys, this.props.shortcut.combo)) {
          this.props.questionComplete(this.state.score, this.state.incorrectAttempts);
          this.reset()
        } else {
          this.handleIncorrect();
        }
      }
    }
  };

  keyUp = (e) => {
    e.preventDefault();
    this.setState({
      currentKeys: [],
    });
  };

  handleIncorrect = () => {
    let newScore = this.state.score - SCORE_DECREMENT;
    if (newScore < 0) newScore = 0;
    this.setState({
      incorrectAttempts: this.state.incorrectAttempts + 1,
      score: newScore,
    });
  }

  reset = () => {
    this.setState({
      currentKeys: [],
      score: INITIAL_SCORE,
      incorrectAttempts: 0
    });
  }

  render() {
    const { incorrectAttempts } = this.state;
    const { combo } = this.props.shortcut;

    return (
      <div>
        <p>Press the correct key combination</p>
        <h2>{this.props.shortcut.name}</h2>
        <QuestionFeedback incorrectAttempts={incorrectAttempts} combo={combo} />
      </div>
    );
  }

  compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
}

export default Question;
