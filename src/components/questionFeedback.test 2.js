import React from "react";
import QuestionFeedback from "./questionFeedback.js";
import { shallow } from "enzyme";

it("renders without crashing, taking a shortcut combo as prop", () => {
  const combo = ["Control", "c"]
  shallow(<QuestionFeedback combo={combo} />);
});

it("displays the path combo for 3 or more incorrect attempts", () => {
  const combo = ["Control", "c"]
  const wrapper = shallow(<QuestionFeedback incorrectAttempts={3} combo={combo} />);
  const phrase = <h3>Try this: Control + c</h3>
  expect(wrapper).toContainReact(phrase);
});

it("informs the user they have given an incorrect answer", () => {
  const combo = ["Control", "c"]
  const wrapper = shallow(<QuestionFeedback incorrectAttempts={1} combo={combo}/>)
  const wrongAnswer = <p>Try Again</p>
  expect(wrapper).toContainReact(wrongAnswer)
})

