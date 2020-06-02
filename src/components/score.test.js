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

describe('single correct answer tests', () => {

  it('gives  a score of 5 when correct straight away',() => {
    const wrapper  = shallow (<Score totalFailures={0} failuresThisTurn={0} numberOfCorrect={0}/> )
    wrapper.setProps({totalFailures: 0, failuresThisTurn: 0, numberOfCorrect: 1})
    expect(wrapper).toContainReact(<p>Score: 5</p>)
  })

  it('gives  a score of 3 when correct the second time',() => {
    const wrapper  = shallow (<Score totalFailures={0} failuresThisTurn={0} numberOfCorrect={0}/> )
    wrapper.setProps({totalFailures: 1, failuresThisTurn: 1, numberOfCorrect: 0})
    wrapper.setProps({totalFailures: 1, failuresThisTurn: 0, numberOfCorrect: 1})
    expect(wrapper).toContainReact(<p>Score: 3</p>)
  })

  it('gives  a score of 1 when correct the third time',() => {
    const wrapper  = shallow (<Score totalFailures={0} failuresThisTurn={0} numberOfCorrect={0}/> )
    wrapper.setProps({totalFailures: 1, failuresThisTurn: 1, numberOfCorrect: 0})
    wrapper.setProps({totalFailures: 2, failuresThisTurn: 2, numberOfCorrect: 0})
    wrapper.setProps({totalFailures: 2, failuresThisTurn: 0, numberOfCorrect: 1})
    expect(wrapper).toContainReact(<p>Score: 1</p>)
  })

  it('gives  a score of 0 when failing three times',() => {
    const wrapper  = shallow (<Score totalFailures={0} failuresThisTurn={0} numberOfCorrect={0}/> )
    wrapper.setProps({totalFailures: 1, failuresThisTurn: 1, numberOfCorrect: 0})
    wrapper.setProps({totalFailures: 2, failuresThisTurn: 2, numberOfCorrect: 0})
    wrapper.setProps({totalFailures: 3, failuresThisTurn: 3, numberOfCorrect: 0})
    wrapper.setProps({totalFailures: 3, failuresThisTurn: 0, numberOfCorrect: 1})
    expect(wrapper).toContainReact(<p>Score: 0</p>)
  })

  it('gives  a score of 0 when failing four times',() => {
    const wrapper  = shallow (<Score totalFailures={0} failuresThisTurn={0} numberOfCorrect={0}/> )
    wrapper.setProps({totalFailures: 1, failuresThisTurn: 1, numberOfCorrect: 0})
    wrapper.setProps({totalFailures: 2, failuresThisTurn: 2, numberOfCorrect: 0})
    wrapper.setProps({totalFailures: 3, failuresThisTurn: 3, numberOfCorrect: 0})
    wrapper.setProps({totalFailures: 4, failuresThisTurn: 4, numberOfCorrect: 0})
    wrapper.setProps({totalFailures: 4, failuresThisTurn: 0, numberOfCorrect: 1})
    expect(wrapper).toContainReact(<p>Score: 0</p>)
  })

})

it('gives a score of 10 with two first time correct answers', () => {
  const wrapper  = shallow (<Score totalFailures={0} failuresThisTurn={0} numberOfCorrect={0}/> )
  wrapper.setProps({totalFailures: 0, failuresThisTurn: 0, numberOfCorrect: 1})
  wrapper.setProps({totalFailures: 0, failuresThisTurn: 0, numberOfCorrect: 2})
  expect(wrapper).toContainReact(<p>Score: 10</p>)
})

it('gives a score of 8, 2nd time correct, then 1st time correct', () => {
  const wrapper  = shallow (<Score totalFailures={0} failuresThisTurn={0} numberOfCorrect={0}/> )
  wrapper.setProps({totalFailures: 1, failuresThisTurn: 1, numberOfCorrect: 0})
  wrapper.setProps({totalFailures: 1, failuresThisTurn: 0, numberOfCorrect: 1})
  wrapper.setProps({totalFailures: 1, failuresThisTurn: 0, numberOfCorrect: 2})
  expect(wrapper).toContainReact(<p>Score: 8</p>)
})

it('gives a score of 6, 3rd time correct, then 1st time correct', () => {
  const wrapper  = shallow (<Score totalFailures={0} failuresThisTurn={0} numberOfCorrect={0}/> )
  wrapper.setProps({totalFailures: 1, failuresThisTurn: 1, numberOfCorrect: 0})
  wrapper.setProps({totalFailures: 2, failuresThisTurn: 2, numberOfCorrect: 0})
  wrapper.setProps({totalFailures: 2, failuresThisTurn: 0, numberOfCorrect: 1})
  wrapper.setProps({totalFailures: 2, failuresThisTurn: 0, numberOfCorrect: 2})
  expect(wrapper).toContainReact(<p>Score: 6</p>)
})

it('gives a score of 5, 4th time correct, then 1st time correct', () => {
  const wrapper  = shallow (<Score totalFailures={0} failuresThisTurn={0} numberOfCorrect={0}/> )
  wrapper.setProps({totalFailures: 1, failuresThisTurn: 1, numberOfCorrect: 0})
  wrapper.setProps({totalFailures: 2, failuresThisTurn: 2, numberOfCorrect: 0})
  wrapper.setProps({totalFailures: 3, failuresThisTurn: 3, numberOfCorrect: 0})
  wrapper.setProps({totalFailures: 3, failuresThisTurn: 0, numberOfCorrect: 1})
  wrapper.setProps({totalFailures: 3, failuresThisTurn: 0, numberOfCorrect: 2})
  expect(wrapper).toContainReact(<p>Score: 5</p>)
})

it('gives a score of 14, 4th time correct, 1st time correct, 3rd, 2nd, 1st, 4th', () => {
  const wrapper  = shallow (<Score totalFailures={0} failuresThisTurn={0} numberOfCorrect={0}/> )
  wrapper.setProps({totalFailures: 1, failuresThisTurn: 1, numberOfCorrect: 0})
  wrapper.setProps({totalFailures: 2, failuresThisTurn: 2, numberOfCorrect: 0})
  wrapper.setProps({totalFailures: 3, failuresThisTurn: 3, numberOfCorrect: 0})
  wrapper.setProps({totalFailures: 3, failuresThisTurn: 0, numberOfCorrect: 1})
  wrapper.setProps({totalFailures: 3, failuresThisTurn: 0, numberOfCorrect: 2})
  wrapper.setProps({totalFailures: 4, failuresThisTurn: 1, numberOfCorrect: 2})
  wrapper.setProps({totalFailures: 5, failuresThisTurn: 2, numberOfCorrect: 2})
  wrapper.setProps({totalFailures: 5, failuresThisTurn: 0, numberOfCorrect: 3})
  wrapper.setProps({totalFailures: 6, failuresThisTurn: 1, numberOfCorrect: 3})
  wrapper.setProps({totalFailures: 6, failuresThisTurn: 0, numberOfCorrect: 4})
  wrapper.setProps({totalFailures: 6, failuresThisTurn: 0, numberOfCorrect: 5})
  wrapper.setProps({totalFailures: 7, failuresThisTurn: 1, numberOfCorrect: 5})
  wrapper.setProps({totalFailures: 8, failuresThisTurn: 2, numberOfCorrect: 5})
  wrapper.setProps({totalFailures: 9, failuresThisTurn: 3, numberOfCorrect: 5})
  wrapper.setProps({totalFailures: 9, failuresThisTurn: 0, numberOfCorrect: 6})
  expect(wrapper).toContainReact(<p>Score: 14</p>)
})

it('resets the score when a new game is started', () => {
  let game = {
    restart: function () {}
  }
  const wrapper  = shallow (<Score totalFailures={0} failuresThisTurn={0} numberOfCorrect={0} resetScore={false} gameRestarted={game.restart}/> )
  wrapper.setProps({totalFailures: 0, failuresThisTurn: 0, numberOfCorrect: 1, resetScore: false})
  wrapper.setProps({totalFailures: 0, failuresThisTurn: 0, numberOfCorrect: 1, resetScore: true})
  expect(wrapper).toContainReact(<p>Score: 0</p>)
})
