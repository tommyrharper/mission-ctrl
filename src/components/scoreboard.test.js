import React from 'react'
import Scoreboard from './scoreboard.js'
import { shallow } from 'enzyme'

describe('Scoreboard', () => {
  it('renders without crashing', () => {
    shallow(<Scoreboard />)
  })

  it('has a Scoreboard heading', () => {
    const wrapper = shallow(<Scoreboard />)
    const welcome = <h2>Scoreboard</h2>
    expect(wrapper).toContainReact(welcome)
  })

  it('It fetches the data from the api', () => {
    const mockSuccessResponse = {}
    const mockJsonPromise = Promise.resolve(mockSuccessResponse)
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise
    })
    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise)
    shallow(<Scoreboard />)
    expect(global.fetch).toHaveBeenCalledTimes(1)
  })

  it('gives an error response if there is an error', () => {
    const fetchPromise = fetch("http://misson-ctrl-node.herokuapp.com/scores");
    fetchPromise.then(response => {
      return response.json();}).then(scores => {
      console.log(scores);
    });
    expect(global.fetch).toHaveBeenCalledTimes(0)
  })
})
