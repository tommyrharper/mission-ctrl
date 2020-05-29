import React from 'react'
import Scoring from './scoring.js'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<Scoring />)
})

it('gives a score of 5 for getting it right first time', () => {
  const wrapper = shallow(<Scoring />)

})