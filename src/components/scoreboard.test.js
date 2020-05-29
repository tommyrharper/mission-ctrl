import React from 'react'
import Scoreboard from './app.js'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<Scoreboard />)
})