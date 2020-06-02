import React from 'react'
import Game from './game.js'
import { shallow } from 'enzyme'
import macShortcuts from '../shortcuts/mac'

it('renders without crashing', () => {
  shallow(<Game shortcuts={macShortcuts}/>)
})

it('it displays the score', () => {
  const wrapper = shallow(<Game shortcuts={macShortcuts}/>)
  const score = <p>Score: 0</p>
  expect(wrapper).toContainReact(score)
})
