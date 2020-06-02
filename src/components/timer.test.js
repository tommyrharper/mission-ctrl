import React from "react";
import Timer from "./timer.js";
import { shallow, mount } from "enzyme";

it("renders without crashing, taking gameLength in ms", () => {
  shallow(<Timer gameLength={5000} />);
});

it("starting time renders length of game", () => {
  const wrapper = shallow(<Timer gameLength={5000} />);
  const startTime = <p>5:00</p>;
  expect(wrapper).toContainReact(startTime);
});

it("counts down by seconds", () => {
  jest.useFakeTimers();

  const wrapper = shallow(<Timer gameLength={5000} />);

  jest.advanceTimersByTime(2000);
  expect(wrapper).toContainReact(<p>3:00</p>);

  jest.clearAllTimers();
});

it("calls method when timer hits zero", () => {
  jest.useFakeTimers();
  let mockComponent = {
    complete: function () {},
  };
  jest.spyOn(mockComponent, "complete");
  const wrapper = mount(
    <Timer complete={mockComponent.complete} gameLength={5000} />
  );

  jest.advanceTimersByTime(5000);
  expect(mockComponent.complete).toBeCalled();

  jest.clearAllTimers();
});
