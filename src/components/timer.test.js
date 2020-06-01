import React from 'react'
import Timer from './timer.js'
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  shallow(<Timer />)
})

it('starting time renders length of game', ()=> {
  const wrapper = shallow(<Timer />)
  const startTime = <p>5</p> 
  expect(wrapper).toContainReact(startTime)
})