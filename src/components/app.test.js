import React from 'react'
import App from './app.js'
import { shallow } from 'enzyme'
import Game from './game.js'
import Scoreboard from './scoreboard.js'
import macShortcuts from '../shortcuts/mac.js'
import windowsShortcuts from '../shortcuts/windows.js'

it('renders without crashing', () => {
  shallow(<App />)
})

describe('the start button', () => {
  it('when clicked, contains the game element', () => {
    const wrapper = shallow(<App />)
    const button = wrapper.find('button')
    button.simulate('click')

    expect(wrapper.find(Game)).toHaveLength(1);
  })

  it('does not contain the game element if button not clicked', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Game)).toHaveLength(0);
  })

  it('disappears after it has been clicked', () => {
    const wrapper = shallow(<App />)

    const button = wrapper.find('button')
    button.simulate('click')

    expect(wrapper).not.toHaveText('Start');
    

  })

  it('Scoreboard is on the start page', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Scoreboard)).toHaveLength(1);
  })

  it('Scoreboard disappears when the start button is clicked', () => {
    const wrapper = shallow(<App />)

    const button = wrapper.find('button')
    button.simulate('click')
    
    expect(wrapper.find(Scoreboard)).toHaveLength(0);
  })

})


describe('Home button', () => {
  it('appears when the game has been started', () => {
    const wrapper = shallow(<App />)
    const button = wrapper.find('button')
    button.simulate('click')
    expect(wrapper.find('button')).toIncludeText('Home')
  })

  it('does not appear on the home page', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('button')).not.toIncludeText('Home')
  })

  it('returns the user to the home page', () => {
    const wrapper = shallow(<App />)
    const button = wrapper.find('button')
    button.simulate('click')
    const homeButton = wrapper.find('button')
    homeButton.simulate('click')
    expect(wrapper.find('button')).toIncludeText('Start')
  })
})