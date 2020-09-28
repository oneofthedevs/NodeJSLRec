const expect = require("chai").expect;
const request = require("request");

it("Main page constent", (done) => {
  request("http://localhost:2024", (error, res, body) => {
    expect(body).to.equal("Hello from dark side");
    done();
  });
});
