const {
  sum,
  fromEuroToDollar,
  fromDollarToYen,
  fromYenToPound,
} = require("./app.js");

describe("Currency and Math Tests", () => {
  test("adds 14 + 9 to equal 23", () => {
    expect(sum(14, 9)).toBe(23);
  });

  test("3.5 euros should be converted to dollars correctly", () => {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;

    expect(dollars).toBeCloseTo(expected, 5);
  });

  test("1 Dollar should be 154.74 Yen", () => {
    const yen = fromDollarToYen(1);
    const expected = 154.74;

    expect(yen).toBeCloseTo(expected, 5);
  });

  test("195 Yen should be 1 Pound", () => {
    const pounds = fromYenToPound(195);
    const expected = 1;

    expect(pounds).toBeCloseTo(expected, 5);
  });
});
