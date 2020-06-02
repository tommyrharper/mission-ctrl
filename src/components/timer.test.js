import React from "react";
import Timer from "./timer.js";
import { shallow, mount } from "enzyme";
import { act } from "react-dom/test-utils";

it("renders without crashing", () => {
  shallow(<Timer />);
});

it("starting time renders length of game", () => {
  const wrapper = shallow(<Timer />);
  const startTime = <p>Time left: 5</p>;
  expect(wrapper).toContainReact(startTime);
});

it("counts down by seconds", () => {
  jest.useFakeTimers();

  const wrapper = shallow(<Timer />);
  const time = 5;
  const newTime = <p>Time left: {time - 2}</p>;
  jest.advanceTimersByTime(2000);
  expect(wrapper).toContainReact(newTime);

  jest.clearAllTimers()
});

it("calls method when timer hits zero", () => {
  jest.useFakeTimers();
  let mock = {
    complete: function () { console.log("Hello")}
  }
  jest.spyOn(mock, "complete")
  const wrapper = mount(<Timer complete={mock.complete} something={"Hello"}/>)

  jest.advanceTimersByTime(5000);
  expect(mock.complete).toBeCalled();

  jest.clearAllTimers()
})