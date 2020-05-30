process.env.NODE_ENV = 'test';

const assert = require("assert");
const expect = require("chai").expect;
const request = require("supertest");
const app = require("../server");
const mongoose = require('mongoose');


describe("Server Testing Example", () => {

  beforeEach(function (done) {
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

  it("GET / return scores in decending order", async (done) => {
    const first = await request(app)
    .post("/scores")
    .send({ name: "Nigel", score: 100})
    const second = await request(app)
    .post("/scores")
    .send({ name: "Colin", score: 80})
    const third = await request(app)
    .post("/scores")
    .send({ name: "Derek", score: 90})
    await Promise.all([first, second, third])
    .then(() => {
      return request(app)
      .get("/scores")
      .then((response) => {
        console.log(response.body)
        expect(response.body[0].score).to.equal(100);
        expect(response.body[1].score).to.equal(90);
        expect(response.body[2].score).to.equal(80);
        response()
        // done();
      })
      .catch((error) => done(error))    
    })
  });
});
