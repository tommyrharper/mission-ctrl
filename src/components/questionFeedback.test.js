import React from "react";
import QuestionFeedback from "./questionFeedback.js";
import { shallow, mount } from "enzyme";

it("renders without crashing, taking a shortcut name as prop", () => {
  const shortcutName = "Copy"
  shallow(<QuestionFeedback shortcutName={shortcutName} />);
});
