import React, { Component } from "react";

const CONVERT_TO_SECONDS = 1000;
const CENTISECOND = 10

export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameLength: this.props.gameLength,
    };
  }

  componentDidMount() {
    this.centisecondInterval = setInterval(() => {
      if (this.state.gameLength > 0) {
        this.setState((prevState) => ({
          gameLength: prevState.gameLength - CENTISECOND,
        }));
      }

      if (this.state.gameLength === 0) {
        clearInterval(this.centisecondInterval);
        this.props.complete();
      }
    }, 10);
  }

  render() {
    return <p>{(this.state.gameLength / CONVERT_TO_SECONDS).toFixed(2)}</p>;
  }
}

export default Timer;
