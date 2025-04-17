import { countLetterOccurrences } from "../src/letterCounter";

describe("countLetterOccurrences", () => {
  it("should return the correct count of a letter in a word", () => {
    expect(countLetterOccurrences("strawberry", "r")).toBe(3);
    expect(countLetterOccurrences("banana", "a")).toBe(3);
    expect(countLetterOccurrences("apple", "p")).toBe(2);
  });

  it("should return 0 if the letter is not in the word", () => {
    expect(countLetterOccurrences("strawberry", "z")).toBe(0);
  });

  it("should throw an error if the letter is not a single character", () => {
    expect(() => countLetterOccurrences("strawberry", "rr")).toThrow(
      "The letter parameter must be a single character."
    );
  });

  it("should return the correct count of a letter in a word regardless of case", () => {
    expect(countLetterOccurrences("stRawbErRy", "r")).toBe(3);
  });
});
