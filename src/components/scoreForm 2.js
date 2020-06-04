import React, { Component } from 'react';
import axios from 'axios';


class ScoreForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
      const newObj = {
          name: this.state.name,
          score: this.props.score
      };
      axios.post('http://mission-ctrl-node.herokuapp.com/scores', newObj)
          .then((res) => {
            console.log(res)
          }).catch((error) => {
              console.log(error)
          });
      this.setState({ name: ''})
  }




  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default ScoreForm

// export class scoreForm extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       name : ""
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({name: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div>
//         <code>Enter your name: </code>
//         <input type="text"/>
//         <input type="submit" value="submit"/>
//       </div>
//     )
//   }
// }

// export default scoreForm