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
      justCompletedQuestion: false,
      keysDown: 0
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
    const { justCompletedQuestion } = this.state;

    e.preventDefault();
    if (!e.repeat) {
      this.setState({keysDown: this.state.keysDown + 1});
      if (justCompletedQuestion) {
        this.setState({justCompletedQuestion: false})
      }
      const newKeys = [...this.state.currentKeys, e.key];
      this.setState({
        currentKeys: newKeys,
      });
      if (newKeys.length === this.props.shortcut.combo.length) {
        if (this.compareArrays(newKeys, this.props.shortcut.combo)) {
          this.setState({justCompletedQuestion: true, keysDown: 0})
          this.props.questionComplete(this.state.score, this.state.incorrectAttempts);
          this.reset()
        } else {
          this.handleIncorrect();
        }
      }
    }
  };

  removeItemFromArray = (array, item) => {
    let index = array.indexOf(item);
    if (index > -1) {
      array.splice(index, 1);
    }

    return array;
  }

  keyUp = (e) => {
    e.preventDefault();
    let { justCompletedQuestion, keysDown } = this.state;
    let keysComparison = keysDown
    if (keysDown > 0) {
      keysComparison = keysDown - 1;
    }

    if (!justCompletedQuestion && keysComparison === 0) {
      this.handleIncorrect();
    }
    this.setState({
      currentKeys: [],
      keysDown: keysComparison
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
    const { hint } = this.props.shortcut;
    const length = this.props.shortcut.hint.length
    return (
      <div>
        <h2>{this.props.shortcut.name}</h2>
        <p>{length} key combo</p>
        <QuestionFeedback incorrectAttempts={incorrectAttempts} hint={hint} />
      </div>
    );
  }

  compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    arr1.sort();
    arr2.sort();

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i].toLowerCase() !== arr2[i].toLowerCase()) return false;
    }
    return true;
  }
}

export default Question;
