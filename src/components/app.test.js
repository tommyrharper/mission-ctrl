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

describe('Default shortcuts', () => {
  xit('Starts by default as mac', () => {
    // jest.spyOn(navigator, "platform").mockImplementation(() => "MacIntel")

    const wrapper = shallow(<App />)
    expect(wrapper.state().shortcuts).toEqual(macShortcuts)
  })
})

describe('Automatic mac detection', () => {
  xit('Does not display the radio buttons if mac autodetection occurs', () => {
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()
    instance.setState({autoDetectedOS: true})
    const label = <label for="mac">Mac</label>
    expect(wrapper).not.toContainReact(label)
  })
})
