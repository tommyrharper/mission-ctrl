import React from 'react'
import App from './app.js'
import Game from './game.js'
import { shallow } from 'enzyme'

it("renders without crashing", () => {
  shallow(<App />);
});

describe('the start button', () => {
  it('when clicked, contains the game element', () => {
    const wrapper = shallow(<App />)
    const game = <Game />
    const button = wrapper.find('button')
    button.simulate('click')
    expect(wrapper).toContainReact(game)
  })

  it('does not contain the game element if button not clicked', () => {
    const wrapper = shallow(<App />)
    const game = <Game />
    expect(wrapper).not.toContainReact(game)
  })

  it('disappears after it has been clicked', () => {
    const wrapper = shallow(<App />)
    const button = wrapper.find('button')
    button.simulate('click')
    expect(wrapper.state().show).toEqual(true)
  });
})
