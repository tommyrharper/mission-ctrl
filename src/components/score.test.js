import React from 'react'
import Score from './score.js'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<Score />)
})

it('gives a score of 0 on load', () => {
  const wrapper = shallow(<Score totalFailures={0} failuresThisTurn={0} numberOfCorrect={0}/> )
  expect(wrapper).toContainReact(<p>Score: 0</p>)
})

it('gives  a score of 5 when score straight away',() => {
  const wrapper  = shallow (<Score totalFailures={0} failuresThisTurn={0} numberOfCorrect={1}/> )
  expect(wrapper).toContainReact(<p>Score: 5</p>)
})

it('gives a score of 10 with two first time correct answers', () => {
  const wrapper  = shallow (<Score totalFailures={0} failuresThisTurn={0} numberOfCorrect={2}/> )
  expect(wrapper).toContainReact(<p>Score: 10</p>)
})