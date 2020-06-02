import React, { Component } from 'react'

export class scoreForm extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  formatScore = () => {
    const formattedScore = {  }

  }
  render() {
    return (
      <div>
        <code>Enter your name: </code>
        <input type="text"/>
        <button onClick={this.submitScore}>Submit Score</button>
      </div>
    )
  }
}

export default scoreForm
