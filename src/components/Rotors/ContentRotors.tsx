import type { Rotor } from "../../types"

type ContentRotorsProps = {
  selectedRotors: Rotor[]
  initialState: string[]
  setInitialState: (initialState: string[]) => void
}

const regex = /^[A-Za-z]+$/;

export default function ContentRotors({ selectedRotors, initialState, setInitialState }: ContentRotorsProps) {

  const handleChange = (rotorIndex: number, char: string) => {
    let newState = [...initialState]
    newState[rotorIndex] = char.slice(-1)
    setInitialState(newState)
  }

  const handleBlur = (rotorIndex: number) => {
    if (
      !initialState[rotorIndex] ||
      initialState[rotorIndex].trim() === '' ||
      !regex.test(initialState[rotorIndex])
    ) {
      let newState = [...initialState]
      newState[rotorIndex] = 'A'
      setInitialState(newState)
    }
  }

  return (
    <div class="content-rotors">
      <div class="rotor-container">
        <h3 class={`subtitle2 ${selectedRotors[0] ? '' : 'rotor-error'}`} style="text-align: center;">
          Slot 1
          <span class="rotor-id">( Rotor {selectedRotors[0]?.name || '?'} )</span>
        </h3>
        <div class="rotor-controls">
          <img src="rotor.png" alt="rotor" class="rotor-image" />
          <label>
            Rotor Position
            <input
              type="text"
              value={initialState[0]}
              onInput={(e: Event) => {
                const target = e.currentTarget as HTMLInputElement;
                handleChange(0, target.value);
              }}
              onBlur={() => handleBlur(0)}
            />
          </label>
        </div>
      </div>

      <div class="spacer"></div>

      <div class="rotor-container">
        <h3 class={`subtitle2 ${selectedRotors[1] ? '' : 'rotor-error'}`} style="text-align: center;">
          Slot 2
          <span class="rotor-id">( Rotor {selectedRotors[1]?.name || '?'} )</span>
        </h3>
        <div class="rotor-controls">
          <img src="rotor.png" alt="rotor" class="rotor-image" />
          <label>
            Rotor Position
            <input
              type="text"
              value={initialState[1]}
              onInput={(e: Event) => {
                const target = e.currentTarget as HTMLInputElement;
                handleChange(1, target.value);
              }}
              onBlur={() => handleBlur(1)}
            />
          </label>
        </div>
      </div>

      <div class="spacer"></div>

      <div class="rotor-container">
        <h3 class={`subtitle2 ${selectedRotors[2] ? '' : 'rotor-error'}`} style="text-align: center;">
          Slot 3
          <span class="rotor-id">( Rotor {selectedRotors[2]?.name || '?'} )</span>
        </h3>
        <div class="rotor-controls">
          <img src="rotor.png" alt="rotor" class="rotor-image" />
          <label>
            Rotor Position
            <input
              type="text"
              value={initialState[2]}
              onInput={(e: Event) => {
                const target = e.currentTarget as HTMLInputElement;
                handleChange(2, target.value);
              }}
              onBlur={() => handleBlur(2)}
            />
          </label>
        </div>
      </div>
    </div>
  )
}
