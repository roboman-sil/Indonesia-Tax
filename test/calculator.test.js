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

  describe("Overall Test", () => {
    it("should be able to calculate correctly base on input (1)", () => {
      const result = calculator("Monthly", 6500000, "K1");

      expect(result).toEqual({
        "Annual Income": 78000000,
        "Tax Relief": 63000000,
        "Annual Taxable Income": 15000000,
        "Annual Income Tax": 750000
      });
    });

    it("should be able to calculate correctly base on input (2)", () => {
      const result = calculator("Monthly", 25000000, "TK0");

      expect(result).toEqual({
        "Annual Income": 300000000,
        "Tax Relief": 54000000,
        "Annual Taxable Income": 246000000,
        "Annual Income Tax": 31900000
      });
    });
  });
});
