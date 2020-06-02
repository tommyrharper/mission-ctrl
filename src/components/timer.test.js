import React from "react";
import Timer from "./timer.js";
import { shallow, mount } from "enzyme";

it("renders without crashing", () => {
  shallow(<Timer />);
});

it("starting time renders length of game", () => {
  const wrapper = shallow(<Timer />);
  const startTime = <p>5:00</p>;
  expect(wrapper).toContainReact(startTime);
});

it("counts down by seconds", () => {
  jest.useFakeTimers();

  const wrapper = shallow(<Timer />);

  jest.advanceTimersByTime(2000);
  expect(wrapper).toContainReact(<p>3:00</p>);

  jest.clearAllTimers()
});

it("calls method when timer hits zero", () => {
  jest.useFakeTimers();
  let mockComponent = {
    complete: function () {}
  }
  jest.spyOn(mockComponent, "complete")
  const wrapper = mount(<Timer complete={mockComponent.complete} />)

  jest.advanceTimersByTime(5000);
  expect(mockComponent.complete).toBeCalled();

  jest.clearAllTimers()
})
