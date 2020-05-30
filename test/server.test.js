process.env.NODE_ENV = 'test';

const assert = require("assert");
const expect = require("chai").expect;
const request = require("supertest");
const app = require("../server");
const mongoose = require('mongoose');


describe("Server Testing Example", () => {

  before(function (done) {
    mongoose.connection.dropDatabase(function() {
      done()
    })
  })

  it("should return OK status", () => {
    return request(app)
      .get("/")
      .then((response) => {
        assert.equal(response.status, 200);
      });
  });

  it("should return message on rendering", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.text).to.contain("Hello World");
      });
  });

  it("posting returns 200", () => {
    return request(app)
      .post("/scores")
      .send({ name: "Tom", score: 200})
      .then((response) => {
        assert.equal(response.status, 200);
        expect(response.body.name).to.equal("Tom");
      });
  });
});
