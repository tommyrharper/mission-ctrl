import React, { Component } from 'react'

export class Timer extends Component {
  constructor(props){
    super(props)
    this.state = {
      // set to 500 for now needs to be changed 6000 to equal a minute
      gameLength: 500
      
    }
  }

  componentDidMount () {
    //let gameLength = this.state.seconds * 100
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

    
  //   this.secInterval = setInterval(() => {
  //     if (this.state.seconds > 0) {
  //       this.setState(prevState => ({
  //         seconds: prevState.seconds -1,
  //       }))
  //     } 
  //     if (this.state.seconds === 0) {
  //       clearInterval(this.secInterval)
  //       // this.props.complete()
  //     }
  //   },1000)
    
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
