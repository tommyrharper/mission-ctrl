import React, { Component } from "react";
import axios from "axios";

class ScoreForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    if (event) event.preventDefault();
    const newObj = {
      name: this.state.name,
      score: this.props.score,
    };
    axios
      .post("http://mission-ctrl-node.herokuapp.com/scores", newObj)
      .then((res) => {})
      .catch((error) => {
        console.log(error);
      });
    this.setState({ name: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlForm="name">Name:</label>
        <input
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default ScoreForm;