import React from "react";
import ScoreForm from "./scoreForm.js";
import { shallow } from "enzyme";
import axios from "axios";
import waitUntil from "async-wait-until";

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

    const form = wrapper.find("form");
    form.simulate("change", {
      name: "Dave",
    });

    form.simulate("submit");

    expect(spy).toHaveBeenCalledTimes(1);

    spy.mockClear();
    done();
  });

  it("calls props.formSent when post is completed", async (done) => {
    const mock = {
      formSent: function (data) {},
    };
    const formSentSpy = jest.spyOn(mock, "formSent");

    const mockSuccessResponse = {
      data: {
        _id: "5ed66ed66a02e00017173cf3",
        name: "Clive",
        score: 75,
        date: "2020-06-02T15:23:02.650Z",
        __v: 0,
      },
    };

    const mockFetchPromise = Promise.resolve(mockSuccessResponse)
    const axiosSpy = jest
      .spyOn(axios, "post")
      .mockImplementation(() => mockFetchPromise);

    const wrapper = shallow(<ScoreForm formSent={mock.formSent} score={5} />);

    const form = wrapper.find("form");
    form.simulate("change", {
      name: "Dave",
    });

    form.simulate("submit");
    await waitUntil(() => wrapper.state("isSubmitting") === false);

    expect(formSentSpy).toHaveBeenCalled();

    axiosSpy.mockClear();
    done();
  });
});
