process.env.NODE_ENV = 'test';

const assert = require("assert");
const expect = require("chai").expect;
const request = require("supertest");
const app = require("../server");
const mongoose = require('mongoose');


describe("Server Testing Example", () => {

  afterEach(done => {
    clearCollections = () => {
      console.log(mongoose.collection.collections)
      for (var collection in mongoose.collection.collections) {
        mongoose.collection.collections[collection].remove(function() {});
      }
      return done();
    }

    if (mongoose.connection.readyState === 0) {
      console.log(mongoose.collection.collections)
      mongoose.connect(process.env.DB_TEST_URI, function (err) {
        if (err) throw err;
        return clearCollections();
      })
    } else {
      return clearCollections();
    }
  });
  
  // afterEach(done => {
  //   mongoose.disconnect();
  //   return done();
  // });

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
      .send({ name: "Harry", score: 100})
      .then((response) => {
        assert.equal(response.status, 200);
        expect(response.body.name).toEqual("Harry");
      });
  });
});
