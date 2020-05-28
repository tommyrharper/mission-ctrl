import React, { Component } from 'react'

export class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentKeys: []
    }
  }

  componentDidMount() {
    this.keyDownListener()
    this.keyUpListener()
  }

  keyDownListener() {
    document.addEventListener('keydown', (e) => {
      console.log('event listener triggered')
      e.preventDefault()
      if (!e.repeat) {
        console.log("inside !e.repeat statement")
        const newKeys = [...this.state.currentKeys]
        newKeys.push(e.key)
        this.setState({
          currentKeys: newKeys
        })
        console.log('newKeys', newKeys)
        if (newKeys.length === this.props.shortcut.combo.length) {
          if (this.compareArrays(newKeys, this.props.shortcut.combo)) {
            this.props.attempt(true)
          }
          else {
            this.props.attempt(false)
          }
        }
      }
    })
    
  }

  keyUpListener() {
    document.addEventListener('keyup', (e) => {
      console.log("inside keyUpL event listener")
      this.setState({
        currentKeys: []
      })
    })
  }

  render() {
    console.log(this.state.currentKeys,'this.state.currentKeys')
    return (
      <div>
      <h2>{this.props.shortcut.name}</h2>
      </div>
    )
  }

  compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) return false

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false
    }
    return true
  }
}

export default Question
