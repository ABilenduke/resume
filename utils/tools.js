export function capitalize(word) {
  const lowerCaseWord = word.toLowerCase()
  const firstLetter = lowerCaseWord.charAt(0).toUpperCase()
  const wordWithoutFirstLetter = lowerCaseWord.slice(1)

  return firstLetter + wordWithoutFirstLetter
}
