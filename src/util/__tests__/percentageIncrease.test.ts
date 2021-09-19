import percentageIncrease from "../percentageIncrease";

describe("/util/percentageIncrease.ts", () => {
  it("Returns a valid percentage", () => {
    const result = percentageIncrease(75, 25);

    expect(result).toBe(300);
  });

  it("Returns a valid percentage", () => {
    const result = percentageIncrease(80, 10);

    expect(result).toBe(800);
  });

  it("Returns a valid percentage", () => {
    const result = percentageIncrease(0, 10);

    expect(result).toBe(0);
  });
});
