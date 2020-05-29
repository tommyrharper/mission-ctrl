import React from 'react'
import Scoreboard from './scoreboard.js'
import { shallow } from 'enzyme'

describe('Scoreboard renders', () => {
  it('renders without crashing', () => {
    shallow(<Scoreboard />)
  })

  it('has a Scoreboard heading', () => {
    const wrapper = shallow(<Scoreboard />)
    const welcome = <h2>Scoreboard</h2>
    expect(wrapper).toContainReact(welcome)
  })
})


