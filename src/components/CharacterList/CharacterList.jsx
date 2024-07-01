import React from 'react'
import Characters from '../Characters/Characters'
import { useParams } from 'react-router-dom';

const CharacterList = ({ charactersData }) => {
  let characters

  const { type } = useParams();

  if (charactersData.kings) {
    characters = charactersData[type] || [];
  } else {
    characters = charactersData
  }

  return (
    <>
      {characters.map((character) => (
        <Characters key={character.id} character={character} />
      ))}
    </>
  )
}

export default CharacterList
