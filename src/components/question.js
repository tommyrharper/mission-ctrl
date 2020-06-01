import React, { Component } from "react";
import QuestionFeedback from "./questionFeedback";

const INITIAL_SCORE = 5;
const FEEDBACK_THRESHOLD = 3;

export class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentKeys: [],
      score: INITIAL_SCORE,
      incorrectAttempts: 0,
      renderFeedback: false,
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
          this.props.attempt(this.state.score, this.state.incorrectAttempts);
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

  handleIncorrect() {
    let newScore = this.state.score - 2;
    if (newScore < 0) newScore = 0;
    this.setState({
      incorrectAttempts: this.state.incorrectAttempts + 1,
      score: newScore,
    });
    if (this.state.incorrectAttempts + 1 >= FEEDBACK_THRESHOLD) {
      this.setState({
        renderFeedback: true,
      });
    }
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
