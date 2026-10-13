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
              class="hidden-input"
              id={`rotor-${rotor.name}`}
              value={rotor.id}
              checked={selectedRotors.some((r) => r.id === rotor.id)}
              onChange={(e) => handleRotorSelection(rotor.id, e)}
              disabled={selectedRotors.length === 3 && !selectedRotors.some((r) => r.id === rotor.id)}
            />
            <div class="checkmark">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"><path fill="#ffffff" d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/></svg>
            </div>
          </label>
        ))}
      </div>
    </div>
  )
}
