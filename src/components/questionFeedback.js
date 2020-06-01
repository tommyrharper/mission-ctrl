import React, { Component } from "react";

export class QuestionFeedback extends Component {
  constructor(props) {
    super(props);
  }

  joinCombo = () => {
    return this.props.combo.join(" + ");
  };

  render() {
    if (this.props.incorrectAttempts > 2) {
      return <h3>Try this: {this.joinCombo()}</h3>;
    }
    if (this.props.incorrectAttempts > 0) {
      return <p>Try Again</p>
    }    
  }
}

export default QuestionFeedback;
