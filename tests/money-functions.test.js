const formatCurrency = require("../src/js/money-functions");

// Given the amount 0, it returns "$0.00".
// Given the amount 1, it returns "$1.00".
// Given the amount 1.5 it returns "$1.50".
// Given the amount 0.01, it returns "$0.01".
// Given the amount 527.6789, it returns "$527.68".
// Given the amount -1, it returns "-$1.00".
// Add two more test cases with numbers that you choose.

describe("formatCurrency", () => {
  test("Given the amount 0, it returns '$0.00'", ()=> {
    expect(formatCurrency(0)).toBe("$0.00");
  });
  test("Given the amount 1, it returns '$1.00'", ()=> {
    expect(formatCurrency(1)).toBe("$1.00");
  });
  test("Given the amount 1.5, it returns '$1.50'", ()=> {
    expect(formatCurrency(1.5)).toBe("$1.50");
  });
  test("Given the amount 0.01, it returns '$0.01'", ()=> {
    expect(formatCurrency(0.01)).toBe("$0.01");
  });
  test("Given the amount 527.6789, it returns '$527.68'", ()=> {
    expect(formatCurrency(527.6789)).toBe("$527.68");
  });
  test("Given the amount -1, it returns '-$1.00'", ()=> {
    expect(formatCurrency(-1)).toBe("-$1.00");
  });
  test("Given the amount -5.5, it returns '-$5.50'", ()=> {
    expect(formatCurrency(-5.5)).toBe("-$5.50");
  });
  test("Given the amount -87.3366, it returns '-$87.34'", ()=> {
    expect(formatCurrency(-87.3366)).toBe("-$87.34");
  });
});

describe("getCoins", () => {
  test.todo("add getCoins tests here");
});