const assert = require("assert");
const chai = require("chai");
const sinon = require("sinon");
const request = require("supertest");
const sinonChai = require("sinon-chai");
const expect = chai.expect;
chai.use(sinonChai);

const app = require("../server");
const namespace = {
  Score: require("../models/Score")
}
// const Score = require("../models/Score")

describe("Score Routes", () => {
  xit("GET returns all scores", () => {
    const data = [
      {
        _id: "5ed11261c9439b36a8341436",
        name: "Dave",
        score: 100,
        date: "2020-05-29T13:47:13.724Z",
        __v: 0,
      },
      {
        _id: "5ed139a7e7936a50fa921e20",
        name: "Jim",
        score: 100,
        date: "2020-05-29T16:34:47.085Z",
        __v: 0,
      },
    ];

    const stub = sinon.stub(Score, "find");
    stub.returns(data)

    return request(app)
      .get("/scores")
      .then((response) => {
        const body = response.body;
        expect(body[0].name).to.equal("Dave")
        expect(body[1].name).to.equal("Jim")
      });
  });

  it('POST with correct data', () => {
    const stubInstance = {
      save: function () {
        return {
          _id: "5ed22c319a146a4ad81453d6",
          name: 'Nigel',
          score: 99,
          date: "2020-05-30T09:49:37.375Z",
          __v: 0
        }
      }
    }

    const classStub = sinon.stub(namespace, "Score");
    classStub.returns(stubInstance)

    const stub = sinon.createStubInstance(Score)
    stub.save.returns(data)
    console.log(stub.save())

    return request(app)
    .post("/scores")
    .send({ name: "Nigel", score: 99 })
    .then((response) => {
      const body = response.body;
      expect(body.name).to.equal("Nigel")
      expect(body.score).to.equal(99)
    });

  });
});
