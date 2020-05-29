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

  xit('shows a score', () => {
    const wrapper = shallow(<Scoreboard />)
    const scores = <ul>Graham: 1000</ul>
    expect(wrapper).toContainReact(scores)
  })
})


