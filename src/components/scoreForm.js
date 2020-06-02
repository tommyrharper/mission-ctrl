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
    this.setState({ isSubmitting: true });
    if (event) event.preventDefault();
    const newObj = {
      name: this.state.name,
      score: this.props.score,
    };
    axios
      .post("http://mission-ctrl-node.herokuapp.com/scores", newObj)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ isSubmitting: false });
        this.props.formSent();
      })
      .catch((error) => {
        this.setState({ error: true });
      });
    this.setState({ name: "" });
  }

  render() {
    const errorMessage = this.state.error ? <p>There was an error submitting the score</p> : null
    return (
      <div>
        {errorMessage}
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
      </div>
    );
  }
}
export default ScoreForm;
