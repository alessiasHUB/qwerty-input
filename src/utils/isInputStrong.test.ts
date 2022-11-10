import { isInputStrong } from "./isInputStrong";

test("isInputStrong identifies whether a string has a vowel and a special character", () => {
  expect(isInputStrong("hell")).toStrictEqual(false);
  expect(isInputStrong("hEll?!Qn")).toStrictEqual(true);
});
