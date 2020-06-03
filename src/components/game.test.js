import React from "react";
import Game from "./game.js";
import { shallow } from "enzyme";
import macShortcuts from "../shortcuts/mac";
import Question from "./question.js";
import ScoreSummary from "./scoreSummary.js";
import Scoreboard from "./scoreboard.js";

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

describe('Score form submitted', () => {
  it('renders a ScoreSummary and Scoreboard', () => {
    const wrapper = shallow(<Game shortcuts={macShortcuts} />);
    const instance = wrapper.instance();
    instance.formSent()

    expect(wrapper.find(ScoreSummary)).toHaveLength(1);
    expect(wrapper.find(Scoreboard)).toHaveLength(1);
  });
})

it('tryAgain resets the game', () => {
  const wrapper = shallow(<Game shortcuts={macShortcuts} />);
  const instance = wrapper.instance();

  instance.questionComplete(5, 0);

  const score5 = <p>Score: 5</p>;
  expect(wrapper).toContainReact(score5);

  instance.tryAgain()

  const score0 = <p>Score: 0</p>;
  expect(wrapper).toContainReact(score0);
});

describe('Combo streak', () => {
  it('Adds +5 if you get 3 correct in a row', () => {
    const wrapper = shallow(<Game shortcuts={macShortcuts} />)
    const instance = wrapper.instance()
    instance.questionComplete(5, 0)
    instance.questionComplete(5, 0)
    instance.questionComplete(5, 0)
    expect(instance.state.score).toEqual(20)
  })
  
  it('Adds +15 if you get 6 correct in a row', () => {
    const wrapper = shallow(<Game shortcuts={macShortcuts} />)
    const instance = wrapper.instance()
    instance.questionComplete(5, 0)
    instance.questionComplete(5, 0)
    instance.questionComplete(5, 0)
    instance.questionComplete(5, 0)
    instance.questionComplete(5, 0)
    instance.questionComplete(5, 0)
    expect(instance.state.score).toEqual(45)
  })
})

