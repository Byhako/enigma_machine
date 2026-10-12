import './styles.css'

type plugboardProps = {
  plugboardPairs: string[]
  setPlugboardPairs: (plugboardPairs: string[]) => void
}

const regex = /^[A-Za-z0-9]+$/;

export default function Plugboard({ plugboardPairs, setPlugboardPairs }: plugboardProps) {

  const handleChange = (index: number, value: string) => {
    let newState = [...plugboardPairs]
    newState[index] = value.slice(-2)
    setPlugboardPairs(newState)
  }

  const handleBlur = (index: number) => {
    if (
      !plugboardPairs[index] ||
      plugboardPairs[index].trim() === '' ||
      plugboardPairs[index].length !== 2 ||
      !regex.test(plugboardPairs[index])
    ) {
      let newState = [...plugboardPairs]
      newState.splice(index, 1)
      setPlugboardPairs(newState)
    }

    const lastPair = plugboardPairs[index]
    const values = plugboardPairs.join('').slice(0, -2)

    if (values.includes(lastPair[0]) || values.includes(lastPair[1])) {
      let newState = [...plugboardPairs]
      newState.splice(index, 1)
      setPlugboardPairs(newState)
    }
  }

  return (
    <section class="plugboard content">
      <h3 class="subtitle2">Plugboard Settings <span>(Optional)</span></h3>

      <div class="plugboard-container">
        {Array.from({ length: 12 }).map((_, i) => (
          <input
            key={i}
            id={`plugboard-${i}`}
            type="text"
            maxLength={2}
            value={plugboardPairs[i] || ""}
            onInput={(e: Event) => {
              const target = e.currentTarget as HTMLInputElement;
              handleChange(i, target.value);
            }}
            onBlur={() => handleBlur(i)}
          />
        ))}
      </div>
    </section>
  )
}
