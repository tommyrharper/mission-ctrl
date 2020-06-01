import React from "react";
import QuestionFeedback from "./questionFeedback.js";
import { shallow, mount } from "enzyme";

it("renders without crashing, taking a shortcut combo as prop", () => {
  const combo = ["Control", "c"]
  shallow(<QuestionFeedback combo={combo} />);
});

it("displays the passed combo", () => {
  const combo = ["Control", "c"]
  const wrapper = shallow(<QuestionFeedback combo={combo} />);
  const phrase = <h2>Control + c</h2>
  expect(wrapper).toContainReact(phrase);
});
