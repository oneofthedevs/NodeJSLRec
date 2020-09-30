const expect = require("chai").expect;
const request = require("request");

describe("Web Pages test cases", () => {
  afterEach(() => {
    console.log("afterEach");
  });
  after(() => {
    console.log("after");
  });
  beforeEach(() => {
    console.log("beforeEach");
  });
  before(() => {
    console.log("before");
  });
  describe("Main Page", () => {
    it("Main page constent", (done) => {
      request("http://localhost:2024", (error, res, body) => {
        expect(body).to.equal("Hello from dark side");
        done();
      });
    });

    it("Main page Check", (done) => {
      request("http://localhost:2024", (error, res, body) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });
  describe("Contact Page", () => {
    it("Contact page constent", (done) => {
      request("http://localhost:2024/contactme", (error, res, body) => {
        expect(body).to.equal("Contact from dark side");
        done();
      });
    });

    it("Contact page Check", (done) => {
      request("http://localhost:2024/contactme", (error, res, body) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  it("About page constent", (done) => {
    request("http://localhost:2024/about", (error, res, body) => {
      expect(body).to.equal("About from dark side");
      done();
    });
  });
});
