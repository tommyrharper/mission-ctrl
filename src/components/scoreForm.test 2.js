import React from 'react'
import ScoreForm from './ScoreForm.js'
import { shallow } from 'enzyme'

describe('ScoreForm', () => {
  it('renders without crashing', () => {
    shallow(<ScoreForm/>)
  })

  xit('prompts the user to enter their name', () => {
    const wrapper = shallow(<ScoreForm/>)
    const namePrompt = <code>Enter your name: </code>
    expect(wrapper).toContainReact(namePrompt)
  })

  xit('has input for user to enter name', () => {
    const wrapper = shallow(<ScoreForm/>)
    const inputBox = <input type="text"/>
    expect(wrapper).toContainReact(inputBox)
  })
})

//coverage needs ramping up