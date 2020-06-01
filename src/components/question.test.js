import React from "react";
import Question from "./question.js";
import { shallow, mount } from "enzyme";
import QuestionFeedback from "./questionFeedback.js";

it("renders without crashing, taking a shortcut to render and attempt method prop", () => {
  let mockAttempt = {
    attempt: function () {},
  };
  const mockShortcut = { name: "Copy", combo: ["c"] };
  shallow(<Question shortcut={mockShortcut} attempt={mockAttempt.attempt} />);
});

const mockKeyDown = (key) => {
  return {
    preventDefault: function () {},
    repeat: false,
    key: key,
  };
};

const mockKeyUp = {
  preventDefault: function () {},
};

it("correct immediately calls attempt with score 5, incorrect 0", () => {
  const mock = {
    attempt: function () {},
  };
  jest.spyOn(mock, "attempt");

  const mockShortcut = { name: "Copy", combo: ["c"] };

  const wrapper = shallow(
    <Question shortcut={mockShortcut} attempt={mock.attempt} />
  );
  const instance = wrapper.instance();

  instance.keyDown(mockKeyDown("c"));
  instance.keyDown(mockKeyUp);

  expect(mock.attempt).toBeCalledWith(5, 0);
});

it("one incorrect, then correct, calls attempt with score 3, incorrect 1", () => {
  const mock = {
    attempt: function () {},
  };
  jest.spyOn(mock, "attempt");

  const mockShortcut = { name: "Copy", combo: ["c"] };

  const wrapper = shallow(
    <Question shortcut={mockShortcut} attempt={mock.attempt} />
  );
  const instance = wrapper.instance();

  instance.keyDown(mockKeyDown("x"));
  instance.keyUp(mockKeyUp);
  instance.keyDown(mockKeyDown("c"));

  expect(mock.attempt).toBeCalledWith(3, 1);
});

it("two incorrect, then correct, calls attempt with score 1, incorrect 2", () => {
  const mock = {
    attempt: function () {},
  };
  jest.spyOn(mock, "attempt");

  const mockShortcut = { name: "Copy", combo: ["c"] };

  const wrapper = shallow(
    <Question shortcut={mockShortcut} attempt={mock.attempt} />
  );
  const instance = wrapper.instance();

  instance.keyDown(mockKeyDown("y"));
  instance.keyUp(mockKeyUp);
  instance.keyDown(mockKeyDown("x"));
  instance.keyUp(mockKeyUp);
  instance.keyDown(mockKeyDown("c"));

  expect(mock.attempt).toBeCalledWith(1, 2);
});

it("three incorrect, then correct, calls attempt with score 0, incorrect 3", () => {
  const mock = {
    attempt: function () {},
  };
  jest.spyOn(mock, "attempt");

  const mockShortcut = { name: "Copy", combo: ["c"] };

  const wrapper = shallow(
    <Question shortcut={mockShortcut} attempt={mock.attempt} />
  );
  const instance = wrapper.instance();

  instance.keyDown(mockKeyDown("y"));
  instance.keyUp(mockKeyUp);
  instance.keyDown(mockKeyDown("x"));
  instance.keyUp(mockKeyUp);
  instance.keyDown(mockKeyDown("x"));
  instance.keyUp(mockKeyUp);
  instance.keyDown(mockKeyDown("c"));

  expect(mock.attempt).toBeCalledWith(0, 3);
});

it("four incorrect, then correct, calls attempt with score 0, incorrect 4", () => {
  const mock = {
    attempt: function () {},
  };
  jest.spyOn(mock, "attempt");

  const mockShortcut = { name: "Copy", combo: ["c"] };

  const wrapper = shallow(
    <Question shortcut={mockShortcut} attempt={mock.attempt} />
  );
  const instance = wrapper.instance();

  instance.keyDown(mockKeyDown("y"));
  instance.keyUp(mockKeyUp);
  instance.keyDown(mockKeyDown("x"));
  instance.keyUp(mockKeyUp);
  instance.keyDown(mockKeyDown("x"));
  instance.keyUp(mockKeyUp);
  instance.keyDown(mockKeyDown("p"));
  instance.keyUp(mockKeyUp);
  instance.keyDown(mockKeyDown("c"));

  expect(mock.attempt).toBeCalledWith(0, 4);
});

it("repeat keydowns are not counted", () => {
  const mockKeyDownRepeat = (key) => {
    return {
      preventDefault: function () {},
      repeat: true,
      key: key,
    };
  };

  const mock = {
    attempt: function () {},
  };

  const mockShortcut = { name: "Copy", combo: ["c"] };

  const wrapper = shallow(
    <Question shortcut={mockShortcut} attempt={mock.attempt} />
  );
  const instance = wrapper.instance();

  instance.keyDown(mockKeyDown("y"));
  instance.keyDown(mockKeyDownRepeat("y"));
  instance.keyDown(mockKeyDownRepeat("y"));

  expect(instance.state.currentKeys).toStrictEqual(['y'])
});


it("mounting subscribes event listeners", () => {
  const mock = {
    attempt: function () {},
  };
  const mockShortcut = { name: "Copy", combo: ["c"] };
  const spy = jest.spyOn(document, "addEventListener");
  const wrapper = mount(
    <Question shortcut={mockShortcut} attempt={mock.attempt} />
  );
  expect(spy).toHaveBeenCalledTimes(2);
  spy.mockClear();
});

it("unmounting removes event listeners", () => {
  const mock = {
    attempt: function () {},
  };
  const mockShortcut = { name: "Copy", combo: ["c"] };
  const spy = jest.spyOn(document, "removeEventListener");
  const wrapper = mount(
    <Question shortcut={mockShortcut} attempt={mock.attempt} />
  );
  wrapper.unmount();
  expect(spy).toHaveBeenCalledTimes(2);
  spy.mockClear();
});

it("shows the required shortcut name", () => {
  const mockShortcut = { name: "Copy", combo: ["c"] };
  const wrapper = shallow(<Question shortcut={mockShortcut} />);
  expect(wrapper).toContainReact(<h2>Copy</h2>);
});

it(".compareArrays compares arrays", () => {
  const mockShortcut = { name: "Copy", combo: ["c"] };
  const wrapper = shallow(<Question shortcut={mockShortcut} />);
  const instance = wrapper.instance()

  const arr1 = [1,2]
  const arr2 = [1,2, 3]
  const arr3 = ["a","b", "c"]
  const arr4 = ["a","b", "c"]

  expect(instance.compareArrays(arr1, arr2)).toBe(false)
  expect(instance.compareArrays(arr2, arr3)).toBe(false)
  expect(instance.compareArrays(arr3, arr4)).toBe(true)
});

it('after 3 incorrect attempts it renders a QuestionFeedback', () => {
  let mockAttempt = {
    attempt: function () {},
  };
  const mockShortcut = { name: "Copy", combo: ["c"] };
  
  const wrapper = shallow(<Question shortcut={mockShortcut} attempt={mockAttempt.attempt} />);

  expect(wrapper.find(QuestionFeedback)).toHaveLength(0);
  
  const instance = wrapper.instance();

  instance.keyDown(mockKeyDown("y"));
  instance.keyUp(mockKeyUp);
  instance.keyDown(mockKeyDown("x"));
  instance.keyUp(mockKeyUp);
  instance.keyDown(mockKeyDown("z"));
  instance.keyUp(mockKeyUp);

  expect(wrapper.find(QuestionFeedback)).toHaveLength(1);
});

