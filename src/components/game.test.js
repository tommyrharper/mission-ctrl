import React from 'react'
import Game from './game.js'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<Game />)
})

describe('the game', () => {
  it('it asks for ctrl-c', () => {
    const wrapper = shallow(<Game />)
    const challenge = <p>Copy</p>
    expect(wrapper).toContainReact(challenge)
  })
})
