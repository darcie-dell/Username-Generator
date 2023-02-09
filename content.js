import { adjWordList, nounWordList } from './dict.js'
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
function generateUsername() {
  const adj = capitalizeFirstLetter(
    adjWordList[Math.floor(Math.random() * adjWordList.length)],
  )
  const noun = capitalizeFirstLetter(
    nounWordList[Math.floor(Math.random() * nounWordList.length)],
  )
  return adj + '_' + noun
}

document.getElementById('generate').addEventListener('click', () => {
  const word = document.getElementById('word')
  const username = generateUsername()
  word.innerText = username
})
