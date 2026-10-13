import './styles.css'
import type { Rotor } from '../../types'
import RotorSelect from './RotorSelect'
import ContentRotors from './ContentRotors'
import { wiring1, wiring2, wiring3, wiring4, wiring5, wiring6 } from '../../utils/wirings'

const rotors: Rotor[] = [
  { id: 1, name: "I", wiring: wiring1, notch: 'Q' },
  { id: 2, name: "II", wiring: wiring2, notch: 'E' },
  { id: 3, name: "III", wiring: wiring3, notch: 'V' },
  { id: 4, name: "IV", wiring: wiring4, notch: 'J' },
  { id: 5, name: "V", wiring: wiring5, notch: 'Z' },
  { id: 6, name: "VI", wiring: wiring6, notch: 'C' },
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

      <div class="rotors-container">
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
