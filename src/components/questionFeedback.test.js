import React from "react";
import QuestionFeedback from "./questionFeedback.js";
import { shallow } from "enzyme";

it("renders without crashing, taking a shortcut hint as prop", () => {
  const hint = ["Control", "c"]
  shallow(<QuestionFeedback hint={hint} />);
});

it("displays the path hint for 3 or more incorrect attempts", () => {
  const hint = ["Control", "c"]
  const wrapper = shallow(<QuestionFeedback incorrectAttempts={3} hint={hint} />);
  const phrase = <h3>Try this: Control + c</h3>
  expect(wrapper).toContainReact(phrase);
});

it("informs the user they have given an incorrect answer", () => {
  const hint = ["Control", "c"]
  const wrapper = shallow(<QuestionFeedback incorrectAttempts={1} hint={hint}/>)
  const wrongAnswer = <p>Try Again</p>
  expect(wrapper).toContainReact(wrongAnswer)
})

describe('gives user a hint', () => {
  it('after they have given two incorrect answers', () => {
    const hint = ["Control", "c"]
    const wrapper = shallow(<QuestionFeedback incorrectAttempts={2} hint={hint}/>)
    const prompt = "Hint: Control + ?" 
    expect(wrapper).toIncludeText(prompt)
  })

  it('after they have given two incorrect answers for a hint that is three keys long', () => {
    const hint = ["Control", "c", "y"]
    const wrapper = shallow(<QuestionFeedback incorrectAttempts={2} hint={hint}/>)
    const prompt = "Hint: Control + ? + ?" 
    expect(wrapper).toIncludeText(prompt)
  })
  
  it('after they have given two incorrect answers for a hint that is four keys long', () => {
    const hint = ["Control", "c", "y", "t"]
    const wrapper = shallow(<QuestionFeedback incorrectAttempts={2} hint={hint}/>)
    const prompt = "Hint: Control + ? + ? + ?" 
    expect(wrapper).toIncludeText(prompt)
  })
})
