import { useState } from "preact/hooks"
import type { Rotor } from "../types"
import { charToIndex, indexToChar } from "../utils/utils"

export function useRotor() {

  const [position, setPosition] = useState(0)
  const [rotor, setRotor] = useState<Rotor | null>(null)

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

    const mappedIndex = (charIndex + position) % 28
    const outputChar = rotor.wiring[mappedIndex]
    const outputIndex = (charToIndex(outputChar) - position + 28) % 28
    return outputIndex
  }

  function backward(charIndex: number) {
    if (!rotor) return -1
    const mappedIndex = (charIndex + position) % 28
    const targetChar = indexToChar(mappedIndex)
    const foundIndex = rotor.wiring.indexOf(targetChar)
    const outputIndex = (foundIndex - position + 28) % 28
    return outputIndex
  }

  function step() {
    if (!rotor) return -1

    const newPosition = (position + 1) % 28
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
