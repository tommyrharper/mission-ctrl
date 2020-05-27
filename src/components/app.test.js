import React from 'react'
import App from './app.js'
import Game from './game.js'
import { shallow } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16.1'


// configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<App />);
});

describe('Start button appears', () => {
  xit('Start button is rendered', () => {
    const wrapper = shallow(<App />)
    const button = <button>Start</button>
    expect(wrapper).toContainReact(button)
  })

  it('contains the game element', () => {
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
})




// describe('Test Button component', () => {
//   it('Test click event', () => {
//     const mockCallBack = jest.fn();
//     const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
//     button.find('button').simulate('click');
//     expect(mockCallBack.mock.calls.length).toEqual(1);
//   });
// });