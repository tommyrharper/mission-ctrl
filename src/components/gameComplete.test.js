import React from 'react'
import GameComplete from './gameComplete.js'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<GameComplete />)
})

it(' says game complete', () => {
  const wrapper = shallow(<GameComplete />)
  const message = <p>Game Complete</p>
  expect(wrapper).toContainReact(message)
})

it('says score', () => {
  const wrapper = shallow(<GameComplete correct={7} mistakes={2} />)
  const correct = <p>Total Correct: 7</p>
  expect(wrapper).toContainReact(correct)
})

it('says mistakes',() => {
  const wrapper = shallow(<GameComplete correct={7} mistakes={2} />)
  const mistakes = <p>Total Mistakes: 2</p>
  expect(wrapper).toContainReact(mistakes)
})
