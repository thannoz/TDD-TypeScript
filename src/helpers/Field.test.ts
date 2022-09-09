import { emptyFieldGenerator, CellState, fieldGenerator } from "./Fields";

const { empty, bomb, hidden } = CellState;

describe("Field Generator", () => {
  describe("emptyFieldGenerator test", () => {
    it("2x2", () => {
      expect(emptyFieldGenerator(2)).toStrictEqual([
        [empty, empty],
        [empty, empty],
      ]);
    });
    it("3x3", () =>
      expect(emptyFieldGenerator(3)).toStrictEqual([
        [empty, empty, empty],
        [empty, empty, empty],
        [empty, empty, empty],
      ]));
    it("3x3 with hidden state", () =>
      expect(emptyFieldGenerator(3, hidden)).toStrictEqual([
        [hidden, hidden, hidden],
        [hidden, hidden, hidden],
        [hidden, hidden, hidden],
      ]));
    it("Wrong density", () => {
      const errorText = "Density must be between 0 and 1";
      expect(() => fieldGenerator(1, -1)).toThrow(errorText);
      expect(() => fieldGenerator(1, 2)).toThrow(errorText);
    });
  });
});
