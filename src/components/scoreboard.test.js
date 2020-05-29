import React from 'react'
import Scoreboard from './scoreboard.js'
import { shallow } from 'enzyme'

describe('Scoreboard', () => {
  it('renders without crashing', () => {
    shallow(<Scoreboard />)
  })

  it('has a Scoreboard heading', () => {
    const wrapper = shallow(<Scoreboard />)
    const welcome = <h2>Scoreboard</h2>
    expect(wrapper).toContainReact(welcome)
  })


  it('Shows its scores name, date, score', () => {
    const wrapper = shallow(<Scoreboard />)
    const score = <li>Alex 29/05/20 10000</li>
    expect(wrapper).toContainReact(score)
  })

  it('shows me scores from highest score to lowest score', () => {
    const wrapper = shallow(<Scoreboard />)
    const scores = <ul><li>Graham 29/05/20 20000</li><li>Alex 29/05/20 10000</li></ul>
    expect(wrapper).toContainReact(scores)
  })

})


// {"name": "Alex", "date":"29/05/20", "score": 10000 
// <li key={score.name}>{score.name} {score.date} {score.score}</li>)

