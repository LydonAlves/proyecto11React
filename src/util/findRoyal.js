export const findRoyals = (characters) => {
  const classifiedCharacters = {
    kings: [],
    queens: [],
    lords: [],
    ladies: [],
  };
  // console.log("characters", characters);
  // console.log("classified", classifiedCharacters);

  characters.forEach((character) => {
    const firstWordTitle = character.title.split(' ')[0].toLowerCase();
    if (firstWordTitle === 'king') {
      classifiedCharacters.kings.push(character);
    } else if (firstWordTitle === 'queen') {
      classifiedCharacters.queens.push(character);
    } else if (firstWordTitle === 'lord') {
      classifiedCharacters.lords.push(character);
    } else if (firstWordTitle === 'lady') {
      classifiedCharacters.ladies.push(character);
    }
  });

  return classifiedCharacters;
};
