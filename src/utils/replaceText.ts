export function replaceTextForward(text: string, plugboardPairs: string[]) {

  const dic = plugboardPairs.reduce((objeto: Record<string, string>, elemento: string) => {
    objeto[elemento[0]] = elemento[1]
    return objeto
  }, {})


  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    if (dic[char]) {
      text = text.replace(char, dic[char])
    }
  }

  return text
}


export function replaceTextBackward(text: string, plugboardPairs: string[]) {

  const dic = plugboardPairs.reduce((objeto: Record<string, string>, elemento: string) => {
    objeto[elemento[1]] = elemento[0]
    return objeto
  }, {})

  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    if (dic[char]) {
      text = text.replace(char, dic[char])
    }
  }

  return text
}
