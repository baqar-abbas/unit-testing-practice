// Reverse String

const revString = require("../task2");

// test starts here

test("reverse characters in a string", () => {
  expect(revString("Power")).toBe("rewoP");
  expect(() => {
    revString("stringstring");
  }).toThrow(/^string length out of bounds$/);
});