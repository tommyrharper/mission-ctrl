import React, { Component } from "react";

const ANSWER_THRESHOLD = 2

export class QuestionFeedback extends Component {
  joinCombo = () => {
    this.renameKeys()
    return this.props.combo.join(" + ");
  };

  renameKeys = () => {
    var indexMeta = this.props.combo.indexOf("Meta")
    if (indexMeta !== -1) {
      this.props.combo[indexMeta] = "Command"
    }
  }

  render() {
    if (this.props.incorrectAttempts > ANSWER_THRESHOLD) {
      return <h3>Try this: {this.joinCombo()}</h3>;
    }
    if (this.props.incorrectAttempts > 0) {
      return <p>Try Again</p>
    }   
    return null 
  }
}

export default QuestionFeedback;
