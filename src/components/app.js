import React, { Component } from "react";
import Game from "./game";
import Scoreboard from "./scoreboard"

export class App extends Component {
  constructor() {
    super();
    this.state = { 
      show: false,
      operatingSystem: "mac"
    }
  }

  startGame = () => {
    this.setState({ show: true })
  };

  chooseWindows = () => {
    this.requestQuestions()
    this.setState({ operatingSystem: "windows" })
  }

  chooseMac = () => {
    this.requestQuestions()
    this.setState({ operatingSystem: "mac" })
  }

  componentDidMount = () => {
    this.requestQuestions()
  }

  requestQuestions = () => {
    fetch('../../questions.json', {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.formatJSON(result)
        },
      )
  }

  formatJSON = (questionsJson) => {
    let nameList
    let comboList
    if (this.state.operatingSystem === 'mac') {
      console.log("props is  mac")
      nameList = Object.keys(questionsJson.mac)
      comboList = Object.values(questionsJson.mac)
    } else {
      console.log("props is  windows")
      nameList = Object.keys(questionsJson.windows)
      comboList = Object.values(questionsJson.windows)
    }

    let shortcutSet = []
    let question
    let a = 0
    nameList.forEach(function(name) {
      question = { name: name, combo: comboList[a]}
      shortcutSet.push(question)
      a += 1
    })
    this.setState({shortcutSet: shortcutSet})
  }


  render() {
    let game
    let button
    let scoreboard
    let toggle
    if (this.state.show) {
      game = <Game shortcutSet={this.state.shortcutSet} />
    } else {
      toggle = <div>
                <p>Please select your operating system:</p>
                <input type="radio" id="mac" name="OS" value="mac" onClick={this.chooseMac}/>
                <label htmlFor="mac">Mac</label>
                <input type="radio" id="windows" name="OS" value="windows" onClick={this.chooseWindows}/>
                <label htmlFor="female">Windows</label>
               </div>
      button = <button onClick={this.startGame}>Start</button>
      scoreboard = <Scoreboard />
    }
    return (
      <div>
        {toggle}
        {button}
        {game}
        {scoreboard}
      </div>
    );
  }
}

export default App;
