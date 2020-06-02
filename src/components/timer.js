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
        this.timesUp()
      }
    },1000)
  } 

  timesUp = () => {
    //this.changeGameCompleteStatus()
  }

  render() {
    const seconds = <p>Time left: {this.state.seconds}</p>
    return (
      <div>
        {seconds}
        {/* {this.props.timesUp} */}
      </div>
    )
  }
}

export default Timer