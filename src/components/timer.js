import React, { Component } from 'react'

export class Timer extends Component {
  constructor(props){
    super(props)
    this.state = {
      seconds: 5,
      centiseconds: 500
    }
  }

  componentDidMount () {
    this.centisecondInterval = setInterval(() => {
      if (this.state.centiseconds > 0) {
        this.setState(prevState => ({
          centiseconds: prevState.centiseconds - 1
        }))
      }
    }, 10)
    if (this.state.seconds === 0) {
      clearInterval(this.centisecondInterval)
    }
    this.secInterval = setInterval(() => {
      if (this.state.seconds > 0) {
        this.setState(prevState => ({
          seconds: prevState.seconds -1,
        }))
      } 
      if (this.state.seconds === 0) {
        clearInterval(this.secInterval)
        // this.props.complete()
      }
    },1000)
    
  } 

  render() {
    const seconds = <p>Time left: {this.state.seconds}:{this.state.centiseconds < 10 ? `0${ this.state.centiseconds}` : this.state.centiseconds}</p>
    return (
      <div>
        {seconds}
        
      </div>
    )
  }
}

export default Timer
