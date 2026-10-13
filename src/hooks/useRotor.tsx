import { useState } from "preact/hooks"
import type { RotorInit } from "../types"
import { charMap, charToIndex, indexToChar } from "../utils/utils"

export function useRotor() {
  const [position, setPosition] = useState(0)
  const [rotor, setRotor] = useState<RotorInit | null>(null)
  const alphabetSize = charMap.length

  function createRotor(
    wiring: string,
    notch: string,
    initialPosition: number = 0) {
    const rotorInit = {
      wiring,
      notch,
    }

    setPosition(initialPosition)
    setRotor(rotorInit)
  }

  function forward(charIndex: number) {
    if (!rotor) return -1

    const mappedIndex = (charIndex + position) % alphabetSize
    const outputChar = rotor.wiring[mappedIndex]
    const outputIndex = (charToIndex(outputChar) - position + alphabetSize) % alphabetSize
    return outputIndex
  }

  function backward(charIndex: number) {
    if (!rotor) return -1
    const mappedIndex = (charIndex + position) % alphabetSize
    const targetChar = indexToChar(mappedIndex)
    const foundIndex = rotor.wiring.indexOf(targetChar)
    const outputIndex = (foundIndex - position + alphabetSize) % alphabetSize
    return outputIndex
  }

  function step() {
    if (!rotor) return -1

    const newPosition = (position + 1) % alphabetSize
    setPosition(newPosition)
    return indexToChar(newPosition) === rotor.notch
  }

  return {
    createRotor,
    forward,
    backward,
    step
  }

}
