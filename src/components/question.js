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
      numOfKeysDown: 0
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
    const { justCompletedQuestion, currentKeys, numOfKeysDown, score, incorrectAttempts } = this.state;
    const { shortcut, questionComplete } = this.props;

    e.preventDefault();
    if (!e.repeat) {
      // Increment number of numOfKeysDown by 1
      this.setState({numOfKeysDown: numOfKeysDown + 1});

      // If we have just completed a question,
      // Set justCompletedQuestion to false on the first key down of the new question
      if (justCompletedQuestion) this.setState({justCompletedQuestion: false});

      // Update the array of keys with the new key
      const newKeys = [...currentKeys, e.key];
      this.setState({currentKeys: newKeys});

      if (newKeys.length === shortcut.combo.length) {
        if (this.compareArrays(newKeys, shortcut.combo)) {
          // Set justCompletedQuestion to true and clear the number of numOfKeysDown
          this.setState({justCompletedQuestion: true, numOfKeysDown: 0})
          questionComplete(score, incorrectAttempts);
          this.reset()
        } else {
          // this.handleIncorrect();
        }
      }
    }
  };

  keyUp = (e) => {
    e.preventDefault();
    let { justCompletedQuestion, numOfKeysDown } = this.state;
    let newNumOfKeysDown = numOfKeysDown

    // Decrement number of keys down by 1
    // Do not allows number of keys down to be less than 1
    if (numOfKeysDown > 0) {
      console.log('num of keys updated', e.key);
      // newNumOfKeysDown = numOfKeysDown - 1;
      newNumOfKeysDown -= 1;
    }

    if (this.state.currentKeys.includes("Meta") && this.state.currentKeys.length > 1) {
      console.log('inside extra condition');
      newNumOfKeysDown -= 1;
    }

    console.log('newNumOfKeysDown, e.key, this.state.currentKeys', newNumOfKeysDown, e.key, this.state.currentKeys)

    // Handle incorrect if there are no keys down, and we have not just completed a question
    if (!justCompletedQuestion && newNumOfKeysDown === 0) {
      console.log('---- INCORRECT!!!!! ----', justCompletedQuestion, newNumOfKeysDown)
      this.handleIncorrect();
    }

    this.setState({
      currentKeys: [],
      numOfKeysDown: newNumOfKeysDown
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
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
}

export default Question;
