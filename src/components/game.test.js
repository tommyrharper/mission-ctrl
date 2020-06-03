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

    expect(wrapper).toIncludeText("Score: 0");

    instance.questionComplete(5, 0);

    expect(wrapper).toIncludeText("Score: 5");
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

  expect(wrapper).toIncludeText("Score: 5");

  instance.tryAgain()

  expect(wrapper).toIncludeText("Score: 0");
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

  it('No combostreak if you get two correct in a row', () => {
    const wrapper = shallow(<Game shortcuts={macShortcuts} />)
    const instance = wrapper.instance()
    instance.questionComplete(5, 0)
    instance.questionComplete(5, 0)
    instance.questionComplete(3, 1)
    instance.questionComplete(5, 0)
    expect(instance.state.score).toEqual(18)
  })
  
  it('Adds +15 if you get 6 correct in a row', () => {
    const wrapper = shallow(<Game shortcuts={macShortcuts} />)
    const instance = wrapper.instance()
    for (let i = 0; i < 6; i++) {
      instance.questionComplete(5, 0)
    }
    expect(instance.state.score).toEqual(45)
  })

  it('Displays the combo streak on the screen for +5', () => {
    const wrapper = shallow(<Game shortcuts={macShortcuts} />)
    const instance = wrapper.instance()
    for (let i= 0; i < 3; i++) {
      instance.questionComplete(5, 0)
    }
    expect(wrapper).toIncludeText("Combo Streak +5")
  })

  it('Displays the combo streak on the screen for + 10', () => {
    const wrapper = shallow(<Game shortcuts={macShortcuts} />)
    const instance = wrapper.instance()
    for (let i= 0; i < 6; i++) {
      instance.questionComplete(5, 0)
    }
    expect(wrapper).toIncludeText("Combo Streak +10")
  })
})

