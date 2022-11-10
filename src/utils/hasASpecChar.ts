import { isSpecChar } from "./isSpecChar";

export function hasASpecChar(word: string): boolean {
  for (const character of word) {
    if (isSpecChar(character)) {
      return true;
    }
  }
  return false;
}
