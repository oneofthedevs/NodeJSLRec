const expect = require("chai").expect;
const person = require("../person");

describe("Person", () => {
  describe("Greet", () => {
    const h = "Hello there, ";
    it("Greet", () => {
      expect(person.greet("DC")).to.equal(h + "DC");
    });
  });
});
