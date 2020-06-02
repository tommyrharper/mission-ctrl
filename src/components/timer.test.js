import React from "react";
import Timer from "./timer.js";
import { shallow, mount } from "enzyme";
import { act } from "react-dom/test-utils";

jest.useFakeTimers();

it("renders without crashing", () => {
  shallow(<Timer />);
});

it("starting time renders length of game", () => {
  const wrapper = shallow(<Timer />);
  const time = 5;
  const startTime = <p>Time left: {time}</p>;
  expect(wrapper).toContainReact(startTime);
});

it("counts down by seconds", () => {
  const wrapper = shallow(<Timer />);
  const time = 5;
  const newTime = <p>Time left: {time - 2}</p>;
  jest.advanceTimersByTime(2000);
  expect(wrapper).toContainReact(newTime);
});

// xit("timer ends at zero to call method", () => {
//   const wrapper = shallow(<Timer seconds={3}/>);
//   jest.advanceTimersByTime(4000);
//   expect(timesUp).toBeCalled();
// });

it("calls method when timer hits zero", () => {
  let mock = {
    complete: function () {}
  }
  jest.spyOn(mock, "complete")
  const wrapper = shallow(<Timer complete={mock.complete}/>)
  jest.advanceTimersByTime(5000);
  expect(mock.complete).toBeCalled();
})
