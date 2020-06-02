import React from "react";
import Game from "./game.js";
import { shallow } from "enzyme";
import macShortcuts from "../shortcuts/mac";
import Question from "./question.js";
import ScoreSummary from "./scoreSummary.js";

it("renders without crashing, taking shortcuts as prop", () => {
  shallow(<Game shortcuts={macShortcuts} />);
});

describe("Game in progress", () => {
  it("displays the score, which can increment", () => {
    const wrapper = shallow(<Game shortcuts={macShortcuts} />);
    const instance = wrapper.instance();

    const score0 = <p>Score: 0</p>;
    expect(wrapper).toContainReact(score0);

    instance.questionComplete(5, 0);

    const score5 = <p>Score: 5</p>;
    expect(wrapper).toContainReact(score5);
  });

  it("renders a question", () => {
    const wrapper = shallow(<Game shortcuts={macShortcuts} />);

    expect(wrapper.find(Question)).toHaveLength(1);
  });
});

describe('Game Complete', () => {
  it('has a try again button', () => {
    const wrapper = shallow(<Game shortcuts={macShortcuts} />);
    const instance = wrapper.instance();
    instance.completeGame()

    expect(wrapper.find('button')).toIncludeText('Try Again')
  });

  it('renders a ScoreSummary', () => {
    const wrapper = shallow(<Game shortcuts={macShortcuts} />);
    const instance = wrapper.instance();
    instance.completeGame()

    expect(wrapper.find(ScoreSummary)).toHaveLength(1);
  });
})
