import React, { Component } from 'react'

const CONVERT_TO_CENTISECONDS  = 10

export class Timer extends Component {
  constructor(props){
    super(props)
    this.state = {
      gameLength: this.props.gameLength/CONVERT_TO_CENTISECONDS
    }
  }

  componentDidMount () {
    this.centisecondInterval = setInterval(() => {
      if (this.state.gameLength > 0) {
        this.setState(prevState => ({
          gameLength: prevState.gameLength - 1
        }))
      }
   
      if (this.state.gameLength === 0) {
        clearInterval(this.centisecondInterval)
        this.props.complete()
      }
    }, 10)
  } 


  render() {
    
    let seconds = this.state.gameLength.toString()
    let newseconds
   
    if (seconds[0] === undefined)
    {
      newseconds = `0:00`
    }
  
     else if (seconds[1] === undefined ){
      newseconds = `0:0${seconds[0]}`
    } 

    else if (seconds[2] === undefined ){
      newseconds = `0:${seconds[0]}${seconds[1]}`
    }

    else {
      newseconds = `${seconds[0]}:${seconds[1]}${seconds[2]}`
    }

    return (
      <p>
        {newseconds}
      </p>
    )
  }
}

export default Timer
