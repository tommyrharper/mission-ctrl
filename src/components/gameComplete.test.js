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

describe("Submit Score Button", () => {
  it('after submit displays the scoreboard', () => {
    const wrapper = shallow(<GameComplete />)
    const button = wrapper.find('button')
    const scoreboard = <Scoreboard/>
    button.simulate('click')
    expect(wrapper).toContainReact(scoreboard)
  })
})

describe("Try again button", () => {
  it('takes you back to the home page', () => {
    const wrapper = shallow(<GameComplete />)
    const button = wrapper.find('button')
    const startScreen = <App />
    button.simulate('click')
    const button2 = wrapper.find('button')
    button2.simulate('click')
    expect(wrapper).toContainReact(startScreen)
  })
})
