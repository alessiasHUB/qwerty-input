import { isSpecChar } from "./isSpecChar";
import { isVowel } from "./isVowel";

export function isInputStrong(word: string): boolean {
  let specialChar = false;
  let vowel = false;
  let count = 0;
  for (const character of word) {
    count++;
    if (isSpecChar(character)) {
      specialChar = true;
    } else if (isVowel(character)) {
      vowel = true;
    }
  }
  if (specialChar === true && vowel === true && count >= 5) {
    return true;
  } else {
    return false
  }
}
