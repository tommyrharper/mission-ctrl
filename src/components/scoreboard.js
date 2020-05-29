import React, { Component } from "react";

export class Scoreboard extends Component {
  constructor() {
    super()
    this.state = {
      scores: [{"name": "Alex", "date":"29/05/20", "score": 10000 }, {"name": "Graham", "date":"29/05/20", "score": 20000 }]
    }
  }
  // const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);
  // makeScoreboard = (array) => {
  //   array.forEach()
  // }
   
    // makeScoreboard = () => {
    //   let array = this.state.scores
    //   for (let i = 0; i < array.length; i++) {
    //     return <li>{this.state.scores[i][0]}, {this.state.scores[i][1]}, {this.state.scores[i][2]}</li>
    //   }
    // }


  render() {
    let listedScores = this.state.scores


  let sortedScores = listedScores.sort(function (a, b) {
  return b.score - a.score;
});




  const scoresPrint = sortedScores.map((score) => <li key={score.name}>{score.name} {score.date} {score.score}</li>)
 
    return (
      <div>
        <h2>Scoreboard</h2>
        <ul>
          {scoresPrint}

        {/* <li>{this.state.scores[i][0]}, {this.state.scores[i][1]}, {this.state.scores[i][2]}</li> */}

        </ul>
      </div>
    )
  }
}

// var fruits = ["apple", "orange", "cherry"];
// fruits.forEach(myFunction);

// function myFunction(item, index) {
//   document.getElementById("demo").innerHTML += index + ":" + item + "<br>"; 
// }

export default Scoreboard
