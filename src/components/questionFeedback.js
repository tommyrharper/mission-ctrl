import React, { Component } from "react";

export class QuestionFeedback extends Component {
  constructor(props) {
    super(props);
  }

  joinCombo = () => {
    return this.props.combo.join(" + ");
  };

  render() {
    return <h2>{this.joinCombo()}</h2>;
  }
}

export default QuestionFeedback;
