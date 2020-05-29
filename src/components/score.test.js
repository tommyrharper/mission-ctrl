import React from 'react'
import Score from './score.js'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<Score />)
})

it('gives a score of 0 on load', () => {
  const wrapper = shallow(<Score numberOfFailures={0}/>)
  expect(wrapper).toContainReact(<p>Score: 0</p>)
})