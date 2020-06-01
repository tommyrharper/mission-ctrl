import React from 'react'
import App from './app.js'
import Game from './game.js'
import Scoreboard from './scoreboard.js'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<App />)
})

const shortcutSet = [
  { name: "Copy", combo: ['Control', 'c'] },
  { name: "Cut", combo: ['Control', 'x'] },
  { name: "Undo", combo: ['Control', 'z'] },
  { name: "Paste", combo: ['Control', 'v'] },
]

describe('the start button', () => {
  xit('when clicked, contains the game element', () => {
    const wrapper = shallow(<App />)
    const game = <Game shortcutSet={[undefined]}/>
    const button = wrapper.find('button')
    button.simulate('click')
    expect(wrapper).toContainReact(<div>{game}</div>)
  })

  it('does not contain the game element if button not clicked', () => {
    const wrapper = shallow(<App />)
    const game = <Game shortcutSet={shortcutSet} />
    expect(wrapper).not.toContainReact(game)
  })

  it('disappears after it has been clicked', () => {
    const wrapper = shallow(<App />)
    const button = wrapper.find('button')
    button.simulate('click')
    expect(wrapper.state().show).toEqual(true)
  })

  it('Scoreboard is on the start page', () => {
    const wrapper = shallow(<App />)
    const scoreboard = <Scoreboard />
    expect(wrapper).toContainReact(scoreboard)
  })

  it('Scoreboard disappears when the start button is clicked', () => {
    const wrapper = shallow(<App />)
    const scoreboard = <Scoreboard />
    const button = wrapper.find('button')
    button.simulate('click')
    expect(wrapper).not.toContainReact(scoreboard)
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


