import React, { Component } from "react";

export class QuestionFeedback extends Component {
  constructor(props) {
    super(props);
  }

  joinCombo = () => {
    return this.props.combo.join(" + ");
  };

  render() {
    return <h3>Try this: {this.joinCombo()}</h3>;
  }
}

export default QuestionFeedback;
