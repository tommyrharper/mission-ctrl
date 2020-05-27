import React from 'react'
import App from './app.js';
import { shallow } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16.1'


// configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<App />);
});

describe('Hello world appears', () => {
  it('hello world is rendered', () => {
    const wrapper = shallow(<App />)
    const html = <div><p>Hello World</p></div>
    expect(wrapper).toContainReact(html);
  })
})
