import React, { Component } from "react";
import QuestionFeedback from "./questionFeedback";

const INITIAL_SCORE = 5;
const SCORE_DECREMENT = 2;
const POWER_KEYS = {
  "Meta": true,
  "Shift": true,
  "Alt": true,
  "Control": true
}

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
        }
      }
    }
  };

  findNewNumOfKeysDown() {
    let { numOfKeysDown, currentKeys } = this.state;
    let newNumOfKeysDown = numOfKeysDown

    // Decrement number of keys down by 1
    // Do not allows number of keys down to be less than 1
    if (numOfKeysDown > 0) {
      newNumOfKeysDown -= 1;
    }

    // If the command key and other keys are held down, handle special behaviour for power keys
    if (currentKeys.includes("Meta") && currentKeys.length > 1) {
      newNumOfKeysDown = this.handlePowerKeys(newNumOfKeysDown)
    }
    return newNumOfKeysDown;
  }

  handlePowerKeys(numOfKeysDown) {
    let { currentKeys } = this.state;
    let newNumOfKeysDown = numOfKeysDown
    let extraDecrement = 0;

    // Decrement by the number of non-power keys being held down
    // This is due to the factor non-power keys that are pressed down while command is being held do not register as a key up
    for (let i = 0; i < currentKeys.length; i++) {
      if (!POWER_KEYS[currentKeys[i]]) extraDecrement += 1;
    }
    return newNumOfKeysDown - extraDecrement
  }

  keyUp = (e) => {
    e.preventDefault();
    let { justCompletedQuestion } = this.state;

    // Find the new numebr of keys being held down
    let newNumOfKeysDown = this.findNewNumOfKeysDown();

    // Handle incorrect if there are no keys down, and we have not just completed a question
    if (!justCompletedQuestion && newNumOfKeysDown === 0) {
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
      if (!arr1[i]) return false;
      if (arr1[i].toLowerCase() !== arr2[i].toLowerCase()) return false;
    }
    return true;
  }
}

export default Question;
