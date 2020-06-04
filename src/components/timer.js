import React, { Component } from "react";

const MILLISECONDS_IN_A_SECOND = 1000;
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
    return <p>{(this.state.gameLength / MILLISECONDS_IN_A_SECOND).toFixed(2)}</p>;
  }
}

export default Timer;
