const taxation = require("../../src/tax/taxation");

describe("Taxation", () => {
  it("should tax the correct amount when annual income < 50M", () => {
    const result = taxation(40000000);

    expect(result).toBe(2000000);
  });
  it("should tax the correct amount when annual income = 50M", () => {
    const result = taxation(50000000);

    expect(result).toBe(2500000);
  });
  it("should tax the correct amount when annual income < 250M", () => {
    const result = taxation(200000000);

    expect(result).toBe(25000000);
  });
  it("should tax the correct amount when annual income = 250MM", () => {
    const result = taxation(250000000);

    expect(result).toBe(32500000);
  });
  it("should tax the correct amount when annual income < 500M", () => {
    const result = taxation(300000000);

    expect(result).toBe(45000000);
  });
  it("should tax the correct amount when annual income = 500M", () => {
    const result = taxation(500000000);

    expect(result).toBe(95000000);
  });
  it("should tax the correct amount when annual income > 500M", () => {
    const result = taxation(900000000);

    expect(result).toBe(215000000);
  });
});
