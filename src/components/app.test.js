import React from 'react'
import App from './app.js'
import { shallow } from 'enzyme'
import Game from './game.js'
import Scoreboard from './scoreboard.js'

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

    expect(wrapper.find('button')).toHaveLength(0);
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

describe('Operating system toggle', () => {
  it('Starts by default as mac', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.state().operatingSystem).toEqual("mac")
  })

  it('Changes to windows when the toggle is clicked', () => {
    const wrapper = shallow(<App />)
    const windowsToggle = wrapper.find('#windows')
    windowsToggle.simulate('click')
    expect(wrapper.state().operatingSystem).toEqual("windows")
  })

  it('Starts by default as mac', () => {
    const wrapper = shallow(<App />)
    const windowsToggle = wrapper.find('#windows')
    windowsToggle.simulate('click')
    const macToggle = wrapper.find('#mac')
    macToggle.simulate('click')
    expect(wrapper.state().operatingSystem).toEqual("mac")
  })
})


