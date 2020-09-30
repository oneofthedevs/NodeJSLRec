const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const divi = (a, b) => (b !== 0 ? a / b : undefined);
const mul = (a, b) => a * b;

module.exports = {
  add,
  sub,
  divi,
  mul,
};
