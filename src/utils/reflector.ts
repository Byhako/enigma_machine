
export const reflectorB = "YRUHQSLDPXNGOKMIEBFZCWVJAT"

export function reflector(charIndex: number) {
  const outputChar = reflectorB[charIndex]
  const outputIndex = (outputChar.charCodeAt(0) - 65 + 26) % 26
  return outputIndex
}
