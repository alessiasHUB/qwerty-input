import { hasASpecChar } from "./hasASpecChar";

test('hasASpecChar identifies whether a string has a special character in any case', () => {
  expect(hasASpecChar('hello?')).toBe(true);
  expect(hasASpecChar('hel!lo')).toBe(true);
  expect(hasASpecChar('hello')).toBe(false);
  expect(hasASpecChar('HELLO')).toBe(false);
})