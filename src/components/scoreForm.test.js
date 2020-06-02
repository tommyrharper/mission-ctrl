import React from 'react'
import ScoreForm from './scoreForm.js'
import { shallow } from 'enzyme'

describe('ScoreForm', () => {
  it('renders without crashing', () => {
    shallow(<ScoreForm/>)
  })

  it('prompts the user to enter their name', () => {
    const wrapper = shallow(<ScoreForm/>)
    expect(wrapper).toIncludeText("Name:")
  })
  
  it('has input for user to enter name', () => {
    const wrapper = shallow(<ScoreForm/>)
    expect(wrapper).toContainMatchingElement('input[name="name"]')
  })
})

