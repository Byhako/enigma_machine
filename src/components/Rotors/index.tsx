import './styles.css'
import type { Rotor } from '../../types'
import RotorSelect from './RotorSelect'
import ContentRotors from './ContentRotors'


const rotors: Rotor[] = [
  { id: 1, name: "I", wiring: 'EKMFLGDQVZNTOWYHXUSPAIBRCJ', notch: 'Q' },
  { id: 2, name: "II", wiring: 'AJDKSIRUXBLHWTMCQGZNPYFVOE', notch: 'E' },
  { id: 3, name: "III", wiring: 'BDFHJLCPRTXVZNYEIWGAKMUSQO', notch: 'V' },
  { id: 4, name: "IV", wiring: 'QAZWSXEDCRFVTGBYHNUJMIKOLP', notch: 'J' },
  { id: 5, name: "V", wiring: 'ZPXOCIVUBYTMRLEKWJQHAGSDFN', notch: 'Z' },
]

type RotorsProps = {
  selectedRotors: Rotor[]
  setSelectedRotors: (rotors: Rotor[]) => void
  initialState: string[]
  setInitialState: (initialState: string[]) => void
}

export default function Rotors({ selectedRotors, setSelectedRotors, initialState, setInitialState }: RotorsProps) {

  const handleRotorSelection = (rotorId: number, event: any) => {
    if (event.target.checked) {
      setSelectedRotors([...selectedRotors, rotors[rotorId - 1]])
    } else {
      setSelectedRotors(selectedRotors.filter((rotor) => rotor.id !== rotorId))
    }
  }

  return (
    <section class="rotors">
      <h2 class="subtitle">Rotor Configuration</h2>

      <div class="content">
        <RotorSelect
          rotors={rotors}
          selectedRotors={selectedRotors}
          handleRotorSelection={handleRotorSelection}
        />

        <ContentRotors
          selectedRotors={selectedRotors}
          initialState={initialState}
          setInitialState={setInitialState}
        />
      </div>
    </section>
  )
}
