var should = require("should"),
  assert = require("assert"),
  request = require("supertest");

describe("Game Rest", function() {
  "use strict";
  var url = "http://localhost:3000";

  it("/games GET | should return error if route not exists", function(done) {
    request(url)
      .get("/")
      .expect(200)
      .expect("Content-Type", /application\/json/)
      .end(function(err, res) {
        if (err) {
          throw err;
        }
        res.body.should.have.property("hi");
        res.body.hi.should.equal("Minesweeper");
        done();
      });
  });

  it("/games/ - POST | should return status 200 with Game json ", function(done) {
    request(url)
      .post("/games")
      .send({ cols: 10, rows: 10 })
      .expect("Content-Type", /json/)
      .expect(200) //Status code
      .end(function(err, res) {
        if (err) {
          throw err;
        }
        // Should.js fluent syntax applied
        res.body.should.have.property("gameId");
        res.body.gameId.should.not.equal("");
        done();
      });
  });
});
