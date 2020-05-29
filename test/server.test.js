const assert = require("assert");
const expect = require("chai").expect;
const request = require("supertest");
const app = require("../server");

describe("Server Testing Example", () => {
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
      .post("/")
      .then((response) => {
        assert.equal(response.status, 200);
      });
  });
});
