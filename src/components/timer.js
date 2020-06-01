import React, { Component } from 'react'
// import parent eventually 

export  class Timer extends Component {
  constructor(props){
    super(props)
    this.state = {
      seconds: 5
    }
  }

  render() {
    let seconds = <p>Time left: {this.state.seconds}</p>
    return (
      <div>
        {seconds}
      </div>
    )
  }
}

export default Timer