import './styles.css'

type plugboardProps = {
  plugboardPairs: string[]
  setPlugboardPairs: (plugboardPairs: string[]) => void
}

export default function Plugboard({ plugboardPairs, setPlugboardPairs }: plugboardProps) {

  const handleChange = (index: number, value: string) => {
    let newState = [...plugboardPairs]
    newState[index] = value.slice(-2).toUpperCase()
    setPlugboardPairs(newState)
  }

  const handleBlur = (index: number) => {
    if (!plugboardPairs[index] || plugboardPairs[index].trim() === '' || plugboardPairs[index].length !== 2) {
      let newState = [...plugboardPairs]
      newState.splice(index, 1)
      setPlugboardPairs(newState)
    }

    // TODO: validar que no se repitan letras ya usadas.
    // Si se ingresa un par, por ejemplo 'AB', se debe validar que ni A ni B estén en otro par.
    
  }

  return (
    <section class="plugboard content">
      <h3 class="subtitle2">Plugboard Settings <span>(Optional)</span></h3>

      <div class="plugboard-container">
        {Array.from({ length: 12 }).map((_, i) => (
          <input
            key={i}
            type="text"
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
