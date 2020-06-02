import React from 'react'
import Game from './game.js'
import { shallow } from 'enzyme'
import macShortcuts from '../shortcuts/mac'

it('renders without crashing', () => {
  shallow(<Game shortcuts={macShortcuts}/>)
})

it('it welcomes the user', () => {
  const wrapper = shallow(<Game shortcuts={macShortcuts}/>)
  const welcome = <h1>Mission-Ctrl</h1>
  expect(wrapper).toContainReact(welcome)
})
