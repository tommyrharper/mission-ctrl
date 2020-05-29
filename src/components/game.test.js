import React from 'react'
import Game from './game.js'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<Game />)
})


it('it welcomes the user', () => {
  const wrapper = shallow(<Game />)
  const welcome = <p>Welcome to the Game</p>
  expect(wrapper).toContainReact(welcome)
})

