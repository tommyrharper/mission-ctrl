import React from 'react'
import ScoreSummary from './scoreSummary.js'
import { shallow } from 'enzyme'

describe('ScoreSummary', () => {
  it('renders without crashing',() => {
    shallow(<ScoreSummary/>)
  })
  it('Returns the users score', () => {
    const wrapper = shallow(<ScoreSummary score={15} totalCorrect={3} totalIncorrect={5} gameLength={3000}/>)
    const score = <li>Your score: 15</li>
    expect(wrapper).toContainReact(score)
  })

  it('Returns the total correct', () => {
    const wrapper = shallow(<ScoreSummary score={15} totalCorrect={3} totalIncorrect={5} gameLength={3000}/>)
    const totalCorrect = <li>Total Correct: 3</li>
    expect(wrapper).toContainReact(totalCorrect)
  })

  it('Returns total incorrect', () => {
    const wrapper = shallow(<ScoreSummary score={15} totalCorrect={3} totalIncorrect={5} gameLength={3000}/>)
    const totalIncorrect = <li>Total Incorrect: 5</li>
    expect(wrapper).toContainReact(totalIncorrect)
  })

  it('Returns my accuracy for the round as a percentage', () => {
    const wrapper = shallow(<ScoreSummary score={15} totalCorrect={3} totalIncorrect={5} gameLength={3000}/>)
    const accuracy = <li>Round Accuracy: 37.5%</li>
    expect(wrapper).toContainReact(accuracy)
  })

  it('Returns my average speed for the game', () => {
    const wrapper = shallow(<ScoreSummary score={15} totalCorrect={3} totalIncorrect={5} gameLength={3000}/>)
    const speed = <li>Average speed: 1.00 seconds/question</li>
    expect(wrapper).toContainReact(speed)
  })
})