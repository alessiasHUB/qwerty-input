import { hasAVowel } from "../utils/hasAVowel";
import { hasASpecChar } from "../utils/hasASpecChar";
import { isInputStrong } from "../utils/isInputStrong"

interface WordDescriptionProps {
  wordToDescribe: string;
}

function WordDescription({
  wordToDescribe,
}: WordDescriptionProps): JSX.Element {
  const hasAtLeastFiveCharacters = wordToDescribe.length > 5;
  const containsAVowel = hasAVowel(wordToDescribe);
  const hasTheLetterQ = wordToDescribe.toLowerCase().match("q");
  const hasSpecialChar = hasASpecChar(wordToDescribe);
  const hasStrongInput = isInputStrong(wordToDescribe);

  return (
    <ul>
      {hasAtLeastFiveCharacters && <li>Has at least five characters</li>}
      {containsAVowel && <li>Contains a vowel</li>}
      {hasTheLetterQ && <li>Contains the letter Q</li>}
      {hasSpecialChar && <li>Contains a special character</li>}
      {hasStrongInput && <li>Input is strong!</li>}
    </ul>
  );
}

export default WordDescription;
