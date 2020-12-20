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
    const { justCompletedQuestion, currentKeys, keysDown, score, incorrectAttempts } = this.state;
    const { shortcut, questionComplete } = this.props;

    e.preventDefault();
    if (!e.repeat) {
      // Increment number of keysDown by 1
      this.setState({keysDown: keysDown + 1});

      // If we have just completed a question,
      // Set justCompletedQuestion to false on the first key down of the new question
      if (justCompletedQuestion) this.setState({justCompletedQuestion: false});

      // Update the array of keys with the new key
      const newKeys = [...currentKeys, e.key];
      this.setState({currentKeys: newKeys});

      if (newKeys.length === shortcut.combo.length) {
        if (this.compareArrays(newKeys, shortcut.combo)) {
          // Set justCompletedQuestion to true and clear the number of keysDown
          this.setState({justCompletedQuestion: true, keysDown: 0})
          questionComplete(score, incorrectAttempts);
          this.reset()
        } else {
          this.handleIncorrect();
        }
      }
    }
  };

  keyUp = (e) => {
    e.preventDefault();
    let { justCompletedQuestion, keysDown } = this.state;
    let keysComparison = keysDown

    // Decrement number of keys down by 1
    // Do not allows number of keys down to be less than 1
    if (keysDown > 0) keysComparison = keysDown - 1;

    // Handle incorrect if there are no keys down, and we have not just completed a question
    if (!justCompletedQuestion && keysComparison === 0) this.handleIncorrect();

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
    const length = this.props.shortcut.hint.length;
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
