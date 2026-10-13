export const charMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ .abcdefghijklmnopqrstuvwxyz0123456789+-*=#$%&()@[]{}<>_!¡¿?"

export function charToIndex(char: string) {
  return charMap.indexOf(char)
}

export function indexToChar(index: number) {
  return charMap[index]
}
