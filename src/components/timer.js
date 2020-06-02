import React, { Component } from 'react'

// import parent eventually 

export class Timer extends Component {
  constructor(props){
    super(props)
    this.state = {
      seconds: 5
    }
  }

  componentDidMount() {
    this.secInterval = setInterval(() => {
      if (this.state.seconds > 0) {
        this.setState(prevState => ({
          seconds: prevState.seconds -1
        }))
      } 
      if (this.state.seconds === 0) {
        clearInterval(this.secInterval)
        this.props.timesUp()
      }
    },1000)
  } 

  // timesUp = () => {
  //   this.props.timesUp(true)
  // }

  render() {
    const seconds = <p>Time left: {this.state.seconds}</p>
    return (
        {seconds}
    )
  }
}

export default Timer

// game needs could send its own time to make more oop 