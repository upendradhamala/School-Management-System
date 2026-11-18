// Capitalizes the first letter of every word: "ram  BAHADUR" -> "Ram Bahadur".
// Extra spaces are collapsed and non-string input is treated as empty, so this
// never throws on user input (the old version crashed on double spaces).
const capitalize = (givenstring) =>
  String(givenstring ?? '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')

export default capitalize
