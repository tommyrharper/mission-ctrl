import React, { Component } from 'react'

export class Timer extends Component {
  constructor(props){
    super(props)
    this.state = {
      // seconds: 5,
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
    
    let seconds = this.state.centiseconds.toString()
    let newseconds = `${seconds[0]}: ${seconds[1]}${seconds[2]}`

    const formatted = <p>Time left: {newseconds} </p>
    // let string = this.state.centiseconds.toString()
    // console.log(string[0] +":" + string.splice(1, 2).join(""))
    
    return (
      <div>
        {formatted}
      </div>
    )
  }
}

export default Timer
