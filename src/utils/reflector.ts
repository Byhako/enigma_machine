
export const reflectorB = [48, 63, 45, 37, 36, 39, 51, 32, 33, 57, 44, 43, 62, 35, 54, 40, 60, 50, 58, 34, 52, 61, 47, 38, 41, 55, 53, 59, 42, 49, 56, 46, 7, 8, 19, 13, 4, 3, 23, 5, 15, 24, 28, 11, 10, 2, 31, 22, 0, 29, 17, 6, 20, 26, 14, 25, 30, 9, 18, 27, 16, 21, 12, 1]

export function reflector(charIndex: number) {
  return reflectorB[charIndex]
}
