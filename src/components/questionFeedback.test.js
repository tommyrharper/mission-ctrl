import React from "react";
import QuestionFeedback from "./questionFeedback.js";
import { shallow, mount } from "enzyme";

it("renders without crashing, taking a shortcut combo as prop", () => {
  const combo = ["Control", "c"]
  shallow(<QuestionFeedback combo={combo} />);
});


