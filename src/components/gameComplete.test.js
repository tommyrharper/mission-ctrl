import React from 'react'
import GameComplete from './gameComplete.js'
import Scoreboard from './scoreboard.js'
import App from './app.js'
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

it('says percentage accuracy',() => {
  const wrapper = shallow(<GameComplete correct={7} mistakes={3} />)
  const accuracy = <p>Accuracy: 70%</p>
  expect(wrapper).toContainReact(accuracy)
})

describe("Submit Score Button", () => {
  it('after submit displays the scoreboard', () => {
    const wrapper = shallow(<GameComplete />)
    const button = wrapper.find('button')
    const scoreboard = <Scoreboard/>
    button.simulate('click')
    expect(wrapper).toContainReact(scoreboard)
  })
})
