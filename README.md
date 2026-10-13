# ⚙️ Extended Enigma Machine

An interactive, modern simulation of the historical World War II Enigma cipher machine, built with **Preact**, **TypeScript**, and **Vite**. 

While the original electromechanical Enigma machine was restricted strictly to the 26 uppercase Latin letters, this extended implementation expands the cryptographic alphabet to support **uppercase, lowercase, numbers, spaces, and punctuation (`.`)**.

---

## 📸 Preview

![Enigma Machine Simulator](./image.png)

---

## 📜 Historical Context vs. Modern Enhancements

The **Enigma machine** was a series of electro-mechanical rotor cipher machines widely used by the German military during World War II to encrypt and decrypt sensitive military communications. 

Despite its historical complexity, the original military Enigma had notable limitations:
* **26-letter alphabet only:** No lowercase letters, numbers, spaces, or punctuation were supported.
* **Workarounds required:** Numbers had to be spelled out phonetically, words were jammed together without spaces, and specific letters (like `X`) were substituted for spaces or periods.

### ✨ What Makes This Version Different?

This project preserves the authentic mechanics of the Enigma cipher (rotors, stepping mechanism, reflector, and plugboard) while extending the symbol set to **64 characters**:

| Feature | Historical Enigma | This Extended Enigma |
| :--- | :--- | :--- |
| **Character Set** | 26 uppercase characters (`A-Z`) | **64 characters** (`A-Z`, `a-z`, `0-9`, space ` `, period `.`) |
| **Spaces & Punctuation** | ❌ None (used substitutes like `X`) | ✅ Native support for whitespace and periods |
| **Numbers** | ❌ Spelled out (e.g., *EINS*, *ZWEI*) | ✅ Native digits `0` to `9` |
| **Case Sensitivity** | ❌ Uppercase only | ✅ Preserves distinct uppercase and lowercase characters |
| **Plugboard Swaps** | Supported across 26 letters | Supported across all 64 characters |
| **Reflector Mechanics** | Reciprocal encryption (A key never encrypts to itself) | Reciprocal encryption preserved across 64 characters |

---

## 🧩 How It Works

Just like the historical device, this machine is **reciprocal**: encrypting a ciphertext using the exact same rotor configuration, starting positions, and plugboard connections reproduces the original plaintext!

### Encryption Signal Path:

```
[ Input Character ]
        ↓
  [ Plugboard ]          (First character swap)
        ↓
 [ Rotor 1 (Fast) ]      (Forward substitution)
        ↓
[ Rotor 2 (Middle) ]     (Forward substitution)
        ↓
 [ Rotor 3 (Slow) ]      (Forward substitution)
        ↓
   [ Reflector ]         (Reflects signal backwards)
        ↓
 [ Rotor 3 (Slow) ]      (Backward substitution)
        ↓
[ Rotor 2 (Middle) ]     (Backward substitution)
        ↓
 [ Rotor 1 (Fast) ]      (Backward substitution)
        ↓
  [ Plugboard ]          (Second character swap)
        ↓
[ Ciphertext Character ]
```

After each keystroke, **Rotor 1 steps forward**. When a rotor reaches its notch position, it triggers the adjacent rotor to step, creating polyalphabetic substitution that changes with every single character.

---

## 🚀 Features

- **Extended 64-Character Alphabet:** `ABCDEFGHIJKLMNOPQRSTUVWXYZ .abcdefghijklmnopqrstuvwxyz0123456789`
- **Configurable Rotor Assembly:** Select any 3 rotors out of 6 custom rotor wirings.
- **Adjustable Rotor Initial Positions:** Choose starting positions for each rotor.
- **Mechanical Stepping Simulation:** Authentic odometer-style stepping and turnover notches.
- **Custom Plugboard (Steckerbrett):** Add custom letter/symbol pairs to scramble the signal before and after the rotor stack.
- **Fast & Lightweight:** Built using **Preact** for ultra-fast rendering and minimal bundle size.
- **Clean & Responsive UI:** Vintage-inspired aesthetics with interactive rotor selectors, plugboard inputs, and encrypted output display.

---

## 🛠️ Tech Stack

- **Framework:** [Preact](https://preactjs.com/) (React-compatible lightweight UI library)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server:** [Vite](https://vitejs.dev/)
- **Package Manager:** `pnpm` (compatible with `npm` and `yarn`)

---

## 💻 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18+ recommended) installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Byhako/enigma_machine.git
   cd enigma
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

### Building for Production

To create an optimized production build:

```bash
pnpm build
# or
npm run build
```

To preview the production build locally:

```bash
pnpm preview
# or
npm run preview
```

---

## 📖 Usage Guide

1. **Select Rotors:**
   * Pick 3 rotors from the available rotor options (I through VI).
   * Set their initial positions (e.g., `A`, `B`, `0`, etc.).
2. **Configure the Plugboard (Optional):**
   * Connect pairs of characters (e.g., `A` ↔ `m`, `.` ↔ `9`, ` ` ↔ `Z`).
   * Characters connected on the plugboard will be swapped before entering and after exiting the rotor stack.
3. **Encrypt a Message:**
   * Type or paste your message into the input box.
   * Click **Encrypt** to generate the ciphertext.
4. **Decrypt a Message:**
   * Reset or re-align the rotors to the **exact same initial positions** and plugboard settings used during encryption.
   * Input the ciphertext and press **Encrypt** — the original message will be revealed!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
