import React from "react";
import { shallow } from "enzyme";
import waitUntil from "async-wait-until";

import Scoreboard from "./scoreboard.js";

describe("Scoreboard", () => {
  it("renders without crashing", () => {
    shallow(<Scoreboard />);
  });

  it("has a Scoreboard heading", () => {
    const wrapper = shallow(<Scoreboard />);
    const welcome = <h2>Scoreboard</h2>;
    expect(wrapper).toContainReact(welcome);
  });

  it("fetch scores and render them", async () => {
    const mockSuccessResponse = [
      {
        _id: "5ed22fecc72b923f7f701987",
        name: "Dave",
        score: 100,
        date: "2020-05-30T10:05:32.082Z",
        __v: 0,
      },
      {
        _id: "5ed22fd8c72b923f7f701986",
        name: "Jim",
        score: 80,
        date: "2020-05-30T10:05:12.924Z",
        __v: 0,
      },
    ];

    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });

    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

    const wrapper = shallow(<Scoreboard />);

    await waitUntil(() => wrapper.state("isLoaded") === true)

    const score2 = <li>Jim 30/05/2020 80</li>
    const score1 = <li>Dave 30/05/2020 100</li>

    expect(wrapper).toContainReact(score1)
    expect(wrapper).toContainReact(score2)
    
    global.fetch.mockClear();
  });

  it('renders some error message if the fetch fails', async () => {
    const mockFetchPromise = Promise.reject("Server Error");

    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

    const wrapper = shallow(<Scoreboard />);

    await waitUntil(() => wrapper.state("isLoaded") === true)

    const errorMessage = <h3>Could not load scores</h3>

    expect(wrapper).toContainReact(errorMessage)
    
    global.fetch.mockClear();
  });
});
