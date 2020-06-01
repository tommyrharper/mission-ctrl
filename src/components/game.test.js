import React from 'react'
import Game from './game.js'
import { shallow } from 'enzyme'

const shortcutSet = [
  { name: "Copy", combo: ['Control', 'c'] },
  { name: "Cut", combo: ['Control', 'x'] },
  { name: "Undo", combo: ['Control', 'z'] },
  { name: "Paste", combo: ['Control', 'v'] },
]

it('renders without crashing', () => {
  shallow(<Game shortcutSet={shortcutSet} />)
})


it('it welcomes the user', () => {
  const wrapper = shallow(<Game shortcutSet={shortcutSet}/>)
  const welcome = <h1>Mission-Ctrl</h1>
  expect(wrapper).toContainReact(welcome)
})

