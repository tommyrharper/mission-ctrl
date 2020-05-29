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
  const wrapper = shallow(<GameComplete score={7} mistakes={2} />)
  const score = <p>Total Correct: 7</p>
  expect(wrapper).toContainReact(score)
})

it('says mistakes',() => {
  const wrapper = shallow(<GameComplete score={7} mistakes={2} />)
  const mistakes = <p>Total Mistakes: 2</p>
  expect(wrapper).toContainReact(mistakes)
})
// score 
// mistakes 

