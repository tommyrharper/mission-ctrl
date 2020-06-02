import React, { Component } from 'react'

export class Timer extends Component {
  constructor(props){
    super(props)
    this.state = {
      seconds: 5
    }
  }

  componentDidMount () {
    this.secInterval = setInterval(() => {
      if (this.state.seconds > 0) {
        this.setState(prevState => ({
          seconds: prevState.seconds -1
        }))
      } 
      if (this.state.seconds === 0) {
        clearInterval(this.secInterval)
        param1.complete()
        // this.timesUp()
      }
    },1000, this.props)
  } 

  timesUp = () => {
    console.log(this.props)
  }

  render() {
    const seconds = <p>Time left: {this.state.seconds}</p>
    return (
      <div>
        {seconds}
        
      </div>
    )
  }
}

export default Timer