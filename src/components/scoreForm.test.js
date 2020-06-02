import React from 'react'
import ScoreForm from './ScoreForm.js'
import { shallow } from 'enzyme'

describe('scoreForm', () => {
  it('renders without crashing', () => {
    shallow(<ScoreForm/>)
  })

  xit('shows your score', () => {

  })

  it('prompts the user to enter their name', () => {
    const wrapper = shallow(<ScoreForm/>)
    const namePrompt = <code>Enter your name: </code>
    expect(wrapper).toContainReact(namePrompt)
  })

  it('has input for user to enter name', () => {
    const wrapper = shallow(<ScoreForm/>)
    const inputBox = <input type="text"/>
    expect(wrapper).toContainReact(inputBox)
  })

  describe('button, when clicked...', () => {
    // it('creates object to submit with name and score', () => {
      // const wrapper = shallow(<ScoreForm score={15}/>)
      // const mockSubmission = { name: "John", score: }
      // // formatScore = function (){
      //   let emptyObject = {}
      //   emptyObject.name = name from form
      //   emptyObject.score = score from game
      // }
      // // --->
      // expectedOutput{ name: "John", score: 15 }

      // expect(formatScore).toEq(expectedOutput)

    })
    xit('makes a post request to the database', () => {

    })

    xit('brings you back to start game', () => {

    })
  })
})
