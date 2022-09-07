import { describe, expect, test } from "@jest/globals";
import { add } from "./mathFunctions";

describe("Math functions tests", () => {
  it("Check add function", () => {
    expect(add(1, 2)).toBe(3);
  });
});
