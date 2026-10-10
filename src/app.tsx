import { useEffect, useState } from 'preact/hooks'
import { useRotor } from './hooks/useRotor'
import { letterToIndex } from './utils/letterToIndex'
import { reflector } from './utils/reflector'

import Rotors from './components/Rotors'
import Display from './components/Display'
import Plugboard from './components/Plugboard'
import type { Rotor } from './types'


export function App() {
  const [selectedRotors, setSelectedRotors] = useState<Rotor[]>([])
  const [initialState, setInitialState] = useState<string[]>(['A', 'A', 'A'])
  const [inputText, setInputText] = useState<string>("")
  const [plugboardPairs, setPlugboardPairs] = useState<string[]>([])

  const [encryptedText, setEncryptedText] = useState("")
  const rotor1 = useRotor("EKMFLGDQVZNTOWYHXUSPAIBRCJ", "Q")
  const rotor2 = useRotor("AJDKSIRUXBLHWTMCQGZNPYFVOE", "E")
  const rotor3 = useRotor("BDFHJLCPRTXVZNYEIWGAKMUSQO", "V")

  useEffect(() => {
    if (selectedRotors.length === 3) {
      // TODO: construir rotores.
    }
  }, [selectedRotors, initialState])

  const encrypt = () => {
    let encryptedText = ""

    // TODO: reemplazar inputText con plugboardPairs

    for (let i = 0; i < inputText.length; i++) {
      let char = inputText[i]
      let charIndex = letterToIndex(char.toUpperCase())

      let rotor1Index = rotor1.forward(charIndex)
      let rotor2Index = rotor2.forward(rotor1Index)
      let rotor3Index = rotor3.forward(rotor2Index)

      let reflectedIndex = reflector(rotor3Index)

      let rotor3BackwardIndex = rotor3.backward(reflectedIndex)
      let rotor2BackwardIndex = rotor2.backward(rotor3BackwardIndex)
      let rotor1BackwardIndex = rotor1.backward(rotor2BackwardIndex)

      let encryptedChar = String.fromCharCode(65 + rotor1BackwardIndex)
      encryptedText += encryptedChar

      rotor1.step()
      rotor2.step()
      rotor3.step()
    }
    setEncryptedText(encryptedText)
  }

  const reset = () => {
    window.location.reload()
  }

  console.log(selectedRotors, initialState)

  return (
    <>
      <h1 class='title'>Enigma Machine</h1>

      <section class="container">
        <Rotors
          selectedRotors={selectedRotors}
          setSelectedRotors={setSelectedRotors}
          initialState={initialState}
          setInitialState={setInitialState}
        />
        <div class='row'>
          <Display
            inputText={inputText}
            setInputText={setInputText}
            encryptedText={encryptedText}
            encrypt={encrypt}
            disabled={selectedRotors.length !== 3}
            reset={reset}
          />
          <Plugboard
            plugboardPairs={plugboardPairs}
            setPlugboardPairs={setPlugboardPairs}
          />
        </div>
      </section>
    </>
  )
}
