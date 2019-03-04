const calculator = require("../src/calculator");

describe("Calculator", () => {
  it("should return with an object of properties", () => {
    const result = calculator("Annual", 5);

    expect(result).toHaveProperty("Annual Income");
    expect(result).toHaveProperty("Tax Relief");
    expect(result).toHaveProperty("Annual Taxable Income");
    expect(result).toHaveProperty("Annual Income Tax");
  });
  it("should be able to detect input as Annual or Monthly", () => {
    const annual = calculator("Annual", 5);
    const monthly = calculator("Monthly", 5);

    expect(annual).toHaveProperty("Annual Income", 5);
    expect(monthly).toHaveProperty("Annual Income", 60);
  });
});
