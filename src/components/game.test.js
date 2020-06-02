import React from "react";
import Game from "./game.js";
import { shallow } from "enzyme";
import macShortcuts from "../shortcuts/mac";
import Question from "./question.js";

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

});
