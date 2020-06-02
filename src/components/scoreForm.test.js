import React from "react";
import ScoreForm from "./scoreForm.js";
import { shallow } from "enzyme";
import axios from "axios";

describe("ScoreForm", () => {
  it("renders without crashing, taking props of a formSent func and a score", () => {
    const mock = {
      formSent: function () {},
    };
    shallow(<ScoreForm formSent={mock.formSent} score={5} />);
  });

  it("prompts the user to enter their name", () => {
    const wrapper = shallow(<ScoreForm />);
    expect(wrapper).toIncludeText("Name:");
  });

  it("has input for user to enter name", () => {
    const wrapper = shallow(<ScoreForm />);
    expect(wrapper).toContainMatchingElement('input[name="name"]');
  });

  it("sends post request on submit", (done) => {
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });

    const spy = jest
      .spyOn(axios, "post")
      .mockImplementation(() => mockFetchPromise);

    const wrapper = shallow(<ScoreForm />);

    wrapper.simulate("change", {
      name: "Dave",
    });

    wrapper.simulate("submit");

    expect(spy).toHaveBeenCalledTimes(1);

    spy.mockClear();
    done();
  });
});
