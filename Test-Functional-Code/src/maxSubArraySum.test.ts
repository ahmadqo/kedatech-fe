import { maxSubArraySum } from "../src/maxSubArraySum";

describe("maxSubArraySum", () => {
  // didapatkan dari 300 + 400
  it("Input : ([100, 200, 300, 400], 2)", () => {
    expect(maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
  });

  // didapatkan dari 4 + 2 + 10 + 23
  it("Input : ([-3, 4, 0, -2, 6, -1], 2)", () => {
    expect(maxSubArraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
  });
});
