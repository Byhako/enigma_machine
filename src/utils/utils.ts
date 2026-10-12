const charMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ."

export function charToIndex(char: string) {
  return charMap.indexOf(char)
}

export function indexToChar(index: number) {
  return charMap[index]
}






// export function charToIndex(char: string) {
//   if (char === ' ') return 28
//   return char.charCodeAt(0) - 65
// }

// export function indexToChar(index: number) {
//   if (index === 28) return ' '
//   return String.fromCharCode(index + 65)
// }
