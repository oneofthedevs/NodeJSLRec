const expect = require("chai").expect;
const calculator = require("../calculator");

describe("Calculator", () => {
  describe("Addition", () => {
    it("1 + 1 === 2", () => {
      expect(calculator.add(1, 1)).to.equal(1 + 1);
      expect(calculator.add(40000, -32198)).to.equal(40000 + -32198);
      expect(calculator.add(4, -479.32)).to.equal(4 + -479.32);
    });
  });
  describe("Substraction", () => {
    it("1 - 1 === 0", () => {
      expect(calculator.sub(1, 1)).to.equal(0);
    });
  });
  describe("Division", () => {
    it("1 / 1 === 1", () => {
      expect(calculator.divi(1, 1)).to.equal(1);
    });
  });
  describe("Multiplication", () => {
    it("1 * 1 === 1", () => {
      expect(calculator.mul(1, 1)).to.equal(1);
    });
  });
});
