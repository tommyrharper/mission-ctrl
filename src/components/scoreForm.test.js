import React from 'react'
import ScoreForm from './ScoreForm.js'
import { shallow } from 'enzyme'

describe('scoreForm', () => {
  it('renders without crashing', () => {
    shallow(<ScoreForm/>)
  })
})
