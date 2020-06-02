import React from "react";
import Timer from "./timer.js";
import { shallow } from "enzyme";
import { act } from "react-dom/test-utils";

jest.useFakeTimers();

it("renders without crashing", () => {
  shallow(<Timer />)
});

// it('gives a score of 0 on load', () => {
//   const wrapper = shallow(<Score totalFailures={0} failuresThisTurn={0} numberOfCorrect={0}/> )
//   expect(wrapper).toContainReact(<p>Score: 0</p>)
// })

it("starting time renders length of game", () => {
  const wrapper = shallow(<Timer />);
  wrapper.setState({ seconds: 3 })
  const time = 3;
  const startTime = <p>Time left: {time}</p>;
  expect(wrapper).toContainReact(startTime);
});

it("counts down by seconds", () => {
  const wrapper = shallow(<Timer />);
  wrapper.setState({ seconds: 3 })
  const time = 3;
  const newTime = <p>Time left: {time - 2}</p>;
  act(() => {
    jest.advanceTimersByTime(2000);
  });
  expect(wrapper).toContainReact(newTime);
});

it("timer ends at zero to call method", () => {
  let mock = {
    mockEndGame: function () {}
  }
  jest.spyOn(mock, "mockEndGame").mockImplementation(() => '')
  
  const wrapper = shallow(<Timer mockEndGame={mock.mockEndGame}/>);
  wrapper.setState({ seconds: 3 })


  act(() => {
    jest.advanceTimersByTime(3000);
  });

  expect(mock.mockEndGame).toBeCalled()
});
