export let kings = []
export let queens = []
export let lords = []
export let ladies = []

export const findRoyals = (characters) => {
  kings = []
  queens = []
  lords = []
  ladies = []
  // console.log(characters)
  characters.forEach((character) => {
    const firstWordTitle = character.title.split(' ')[0].toLowerCase()
    if (firstWordTitle === 'king') {
      kings.push(character)
    } else if (firstWordTitle === 'queen') {
      queens.push(character)
    } else if (firstWordTitle === 'lord') {
      lords.push(character)
    } else if (firstWordTitle === 'lady') {
      ladies.push(character)
    }
  })
  // console.log(kings)
  // console.log(queens)
  // console.log(lords)
  // console.log(ladies)
}
