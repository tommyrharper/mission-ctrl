import React, { Component } from 'react'
// import parent eventually 

export default class Timer extends Component {
  constructor(props){
    super(props)
    this.state = {
      seconds: 5000
    }
  }

  render() {
    
    return (
      <div>
        <p>
        {this.state.seconds/1000}
        </p>
      </div>
    )
  }
}

export default Timer