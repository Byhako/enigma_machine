export type Rotor = {
  id?: number
  name?: string
  wiring: string
  notch: string
}

export type ConfigRotor = {
  forward: (charIndex: number) => number
  backward: (charIndex: number) => number
  step: () => boolean
}
