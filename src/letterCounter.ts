export function countLetterOccurrences(word: string, letter: string): number {
  if (letter.length !== 1) {
    throw new Error("The letter parameter must be a single character.");
  }
  const lowerWord = word.toLowerCase();
  const lowerLetter = letter.toLowerCase();
  return lowerWord.split("").filter((char) => char === lowerLetter).length;
}
