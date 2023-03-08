const Calculator = require("../task3");

const calc = new Calculator();

describe("calculator", () => {
  describe("add", () => {
    test("add two numbers 1", () => {
      expect(calc.add(5, 2)).toBe(7);
    });
    test("add two numbers 2", () => {
      expect(calc.add(12, 3)).toBe(15);
    });
    test("add two numbers 3", () => {
        expect(calc.add(15, 4)).toBe(19);
      });
  });
  describe("subtract", () => {
    test("subtract two numbers 1", () => {
      expect(calc.subtract(13, 7)).toBe(6);
    });
    test("subtract two numbers 2", () => {
      expect(calc.subtract(12, 2)).toBe(10);
    });
    test("subtract two numbers 3", () => {
        expect(calc.subtract(18, 6)).toBe(12);
      });
  });
  describe("multiply", () => {
    test("multiply two numbers test 1", () => {
      expect(calc.multiply(-4, 2)).toBe(-8);
    });
    test("multiply two numbers test 2", () => {
      expect(calc.multiply(2, 8)).toBe(16);
    });
    test("multiply two numbers test 3", () => {
        expect(calc.multiply(3, 7)).toBe(21);
      });
  });
  describe("divide", () => {
    test("divide two numbers test 1", () => {
      expect(calc.divide(12, 3)).toBe(4);
    });
    test("divide two numbers test 2", () => {
      expect(calc.divide(28, 4)).toBe(7);
    });
    test("divide two numbers test 3", () => {
        expect(calc.divide(36, 6)).toBe(6);
      });
  });
});