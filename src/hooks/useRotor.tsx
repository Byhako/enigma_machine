import { useState } from "preact/hooks"

export function useRotor(
  wiring: string,
  notch: string,
  initialPosition: number = 0
) {

  const [position, setPosition] = useState(initialPosition)

  function forward(charIndex: number) {
    const mappedIndex = (charIndex + position) % 26
    const outputChar = wiring[mappedIndex]
    const outputIndex = (outputChar.charCodeAt(0) - 65 - position + 26) % 26
    return outputIndex
  }

  function backward(charIndex: number) {
    const mappedIndex = (charIndex + position) % 26
    const targetChar = String.fromCharCode(65 + mappedIndex)
    const foundIndex = wiring.indexOf(targetChar)
    const outputIndex = (foundIndex - position + 26) % 26
    return outputIndex
  }

  function step() {
    const newPosition = (position + 1) % 26
    setPosition(newPosition)
    return String.fromCharCode(65 + newPosition) === notch
  }

  return {
    forward,
    backward,
    step
  }

}
