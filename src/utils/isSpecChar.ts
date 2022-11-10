export function isSpecChar(character: string): boolean {
    const specChar = ['?', '!', '£'];
    return specChar.includes(character);
  }