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
        this.props.complete()
      }
    },1000)
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