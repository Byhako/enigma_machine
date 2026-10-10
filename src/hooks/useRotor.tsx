import { useState } from "preact/hooks"
import type { Rotor } from "../types"

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

    const mappedIndex = (charIndex + position) % 26
    const outputChar = rotor.wiring[mappedIndex]
    const outputIndex = (outputChar.charCodeAt(0) - 65 - position + 26) % 26
    return outputIndex
  }

  function backward(charIndex: number) {
    if (!rotor) return -1
    const mappedIndex = (charIndex + position) % 26
    const targetChar = String.fromCharCode(65 + mappedIndex)
    const foundIndex = rotor.wiring.indexOf(targetChar)
    const outputIndex = (foundIndex - position + 26) % 26
    return outputIndex
  }

  function step() {
    if (!rotor) return -1

    const newPosition = (position + 1) % 26
    setPosition(newPosition)
    return String.fromCharCode(65 + newPosition) === rotor.notch
  }

  return {
    createRotor,
    forward,
    backward,
    step
  }

}
