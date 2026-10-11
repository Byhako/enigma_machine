export function charToIndex(char: string) {
  if (char === ' ') return 26
  return char.charCodeAt(0) - 65
}

export function indexToChar(index: number) {
  if (index === 26) return ' '
  return String.fromCharCode(index + 65)
}
