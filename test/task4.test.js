// Capitalize Test....

const Capitalize = require("../task4");

describe("Testing Capitalization", () => {
  test("The first Character should be in uppercase", () => {
    // Arrange
    const lowerCase = "this string is lowercase";

    // Act
    const expString = Capitalize(lowerCase);

    // Assert
    expect(expString).toBe("This string is lowercase");
  });
});