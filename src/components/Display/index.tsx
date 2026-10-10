import './styles.css'

type DisplayProps = {
  inputText: string
  setInputText: (text: string) => void
  encryptedText: string
  encrypt: () => void
  reset: () => void
  disabled: boolean
}

export default function Display({ inputText, setInputText, encryptedText, encrypt, disabled, reset }: DisplayProps) {
  return (
    <section class="display">
      <h2 class="subtitle">Operation</h2>
      <div class="content display-content">
        <div class="display-row">
          <h3 class='subtitle2' style={{ marginRight: 'auto', marginBottom: 0 }}>INPUT</h3>
          <button
            type="button"
            onClick={encrypt}
            class='encrypt'
            disabled={disabled || inputText.length === 0}
          >ENCRYPT/DECRYPT</button>
          <button
            type="button"
            onClick={reset}
            class='display-button'
          >RESET</button>
        </div>

        <div class="display-content-text">
          <h3 class='subtitle2'>INPUT TEXT:</h3>
          <textarea
            class="input-text"
            id="input-text"
            spellcheck={false}
            value={inputText}
            rows={3}
            onInput={(e: Event) => {
              const target = e.currentTarget as HTMLInputElement;
              setInputText(target.value.toUpperCase());
            }}
            placeholder="Enter text to encrypt/decrypt..."
          />
        </div>

        <div class="display-row" style={{ marginTop: '10px' }}>
          <h3 class='subtitle2' style={{ marginRight: 'auto', marginBottom: 0 }}>OUTPUT</h3>
          <button
            type="button"
            class='display-button'
            disabled={encryptedText.length === 0}
            onClick={() => {
              navigator.clipboard.writeText(encryptedText)
            }}
            // TODO: alert "Copied to clipboard"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" stroke="#ffffff" stroke-width="2" d="M9 15h8zm0-4h10zm0-4h4zm7-6v6h6M6 5H2v18h16v-4m4 0H6V1h11l5 5z"/></svg>
            COPY OUTPUT
          </button>
        </div>

        <div class="display-content-text">
          <h3 class='subtitle2'>OUTPUT TEXT:</h3>
          <div class="output-text"> {encryptedText} </div>
        </div>
      </div>
    </section>
  )
}
