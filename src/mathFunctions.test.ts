import { describe, expect, test } from "@jest/globals";
import { add, multiply } from "./mathFunctions";

describe("Math functions tests", () => {
  it("Check add function", () => {
    expect(add(1, 2)).toBe(3);
  });
  it("Check multiply function", () => {
    expect(multiply(4, 4)).toBe(16);
  });
});
