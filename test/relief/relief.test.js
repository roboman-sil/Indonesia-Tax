const relief = require("../../src/relief/relief");

describe("Relief", () => {
  it("should return proper amount when TK0", () => {
    const result = relief("TK0");

    expect(result).toBe(54000000);
  });
  it("should return proper amount when TK0", () => {
    const result = relief("K0");

    expect(result).toBe(58500000);
  });
  it("should return proper amount when TK0", () => {
    const result = relief("K1");

    expect(result).toBe(63000000);
  });
  it("should return proper amount when TK0", () => {
    const result = relief("K2");

    expect(result).toBe(67500000);
  });
  it("should return proper amount when TK0", () => {
    const result = relief("K3");

    expect(result).toBe(72000000);
  });
});
