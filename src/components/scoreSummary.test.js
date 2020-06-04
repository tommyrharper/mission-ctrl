import React from "react";
import ScoreSummary from "./scoreSummary.js";
import { shallow } from "enzyme";

describe("ScoreSummary", () => {
  it("renders without crashing", () => {
    shallow(<ScoreSummary />);
  });

  it("Returns the users score", () => {
    const wrapper = shallow(
      <ScoreSummary
        score={15}
        totalCorrect={3}
        totalIncorrect={5}
        gameLength={3000}
      />
    );

    expect(wrapper).toIncludeText("Score:");
    expect(wrapper).toIncludeText("15");
  });

  it("Returns the total correct", () => {
    const wrapper = shallow(
      <ScoreSummary
        score={15}
        totalCorrect={3}
        totalIncorrect={5}
        gameLength={3000}
      />
    );

    expect(wrapper).toIncludeText("Total Correct:");
    expect(wrapper).toIncludeText("3");
  });

  it("Returns total incorrect", () => {
    const wrapper = shallow(
      <ScoreSummary
        score={15}
        totalCorrect={3}
        totalIncorrect={5}
        gameLength={3000}
      />
    );

    expect(wrapper).toIncludeText("Total Incorrect:");
    expect(wrapper).toIncludeText("5");
  });

  it("Returns my accuracy for the round as a percentage", () => {
    const wrapper = shallow(
      <ScoreSummary
        score={15}
        totalCorrect={3}
        totalIncorrect={5}
        gameLength={3000}
      />
    );

    expect(wrapper).toIncludeText("Round Accuracy:");
    expect(wrapper).toIncludeText("37.50%");
  });

  it("Returns my average speed for the game", () => {
    const wrapper = shallow(
      <ScoreSummary
        score={15}
        totalCorrect={3}
        totalIncorrect={5}
        gameLength={3000}
      />
    );

    expect(wrapper).toIncludeText("Average Speed:");
    expect(wrapper).toIncludeText("1.00 seconds/question");
  });
});
