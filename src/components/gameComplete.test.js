import React from 'react'
import GameComplete from './gameComplete.js'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<GameComplete />)
})

