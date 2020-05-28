import React from 'react'
import Question from './question.js'
import { shallow, mount } from 'enzyme'

it('renders without crashing', () => {
  let mockAttempt = {
    attempt: function () {}
  }
  const mockShortcut = { name: "Copy", combo: ['c'] }
  shallow(<Question shortcut={mockShortcut} attempt={mockAttempt.attempt}/>)
})

it('it will call attempt(true) if the correct keys are pressed', () => {

  let mockAttempt = {
    attempt: function () {}
  }

  //const jestSpy = jest.spyOn(mockAttempt, "attempt").mockImplementation(() => '')
  jest.spyOn(mockAttempt, "attempt").mockImplementation(() => '')

  const mockShortcut = { name: "Copy", combo: ['c'] }
  
  const wrapper = shallow(<Question shortcut={mockShortcut} attempt={mockAttempt.attempt}/>)

  wrapper.find('div').simulate('keypress', {key: 'c'})
  //console.log(mockAttempt.attempt.mock)

  
  expect(mockAttempt.attempt).toBeCalled();
})
// it('renders without crashing', () => {
//   shallow(<Game />)
// })

// describe('the game', () => {
//   it('it asks for ctrl-c', () => {
//     const wrapper = shallow(<Game />)
//     const challenge = <p>Copy</p>
//     expect(wrapper).toContainReact(challenge)
//   })
// })