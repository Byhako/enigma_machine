
export function generateReflector(size = 28) {
  if (size % 2 !== 0) throw new Error("El tamaño debe ser un número par.");

  const half = size / 2;
  const firstHalf = Array.from({ length: half }, (_, i) => i);
  const secondHalf = Array.from({ length: half }, (_, i) => i + half);

  // Barajamos la segunda mitad para que las parejas sean aleatorias
  for (let i = secondHalf.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [secondHalf[i], secondHalf[j]] = [secondHalf[j], secondHalf[i]];
  }

  // Aseguramos que ningún elemento se refleje a sí mismo (que i no apunte a i)
  for (let i = 0; i < half; i++) {
    if (firstHalf[i] === secondHalf[i]) {
      // Si coinciden, lo intercambiamos con el vecino de al lado
      const swapIndex = (i + 1) % half;
      [secondHalf[i], secondHalf[swapIndex]] = [secondHalf[swapIndex], secondHalf[i]];
    }
  }

  // Construimos el array de mapeo final de tamaño 'size'
  const wiring = new Array(size);
  for (let i = 0; i < half; i++) {
    const a = firstHalf[i];
    const b = secondHalf[i];
    wiring[a] = b;
    wiring[b] = a; // Simetría bidireccional perfecta
  }

  return wiring;
}

export function generateRotorWiring(characterPool: string) {
  // Convertimos el string o array de caracteres en un arreglo mutable
  let chars = typeof characterPool === 'string' ? characterPool.split('') : [...characterPool];

  // Algoritmo de Fisher-Yates para barajar el arreglo de forma aleatoria
  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }

  // Devolvemos el resultado unido nuevamente como un string
  return chars.join('');
}
