import React from 'react'
import ScoreForm from './ScoreForm.js'
import { shallow } from 'enzyme'

describe('scoreForm', () => {
  it('renders without crashing', () => {
    shallow(<ScoreForm/>)
  })

  it('prompts the user to enter their name', () => {
    const wrapper = shallow(<ScoreForm/>)
    const namePrompt = <code>Enter your name: </code>
    expect(wrapper).toContainReact(namePrompt)
  })

  it('allows user to enter name', () => {
    const wrapper = shallow(<ScoreForm/>)
    const inputBox = <input type="text"/>
    expect(wrapper).toContainReact(inputBox)
  })
})
