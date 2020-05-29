import React from 'react'
import Game from './game.js'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<Game />)
})


it('it welcomes the user', () => {
  const wrapper = shallow(<Game />)
  const welcome = <h1>Mission-Ctrl</h1>
  expect(wrapper).toContainReact(welcome)
})

