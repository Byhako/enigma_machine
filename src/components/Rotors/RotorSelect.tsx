import type { Rotor } from "../../types"

type RotorSelectProps = {
  rotors: Rotor[]
  selectedRotors: Rotor[]
  handleRotorSelection: (rotorId: number, event: any) => void
}

export default function RotorSelect({ rotors, selectedRotors, handleRotorSelection }: RotorSelectProps) {
  return (
    <div class="rotors-select">
      <h3 class="subtitle2">Select Rotors (3 of 5)</h3>
      <div class="rotor-selection">
        {rotors.map((rotor) => (
          <label key={rotor.id} class="rotor-selection-item">
            <span class="rotor-name">ROTOR</span>
            <span class="rotor-label">{rotor.name}</span>
            <input
              type="checkbox"
              id={`rotor-${rotor.name}`}
              value={rotor.id}
              checked={selectedRotors.some((r) => r.id === rotor.id)}
              onChange={(e) => handleRotorSelection(rotor.id, e)}
              disabled={selectedRotors.length === 3 && !selectedRotors.some((r) => r.id === rotor.id)}
            />
          </label>
        ))}
      </div>
    </div>
  )
}
