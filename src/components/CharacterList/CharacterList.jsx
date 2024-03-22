import React from 'react'
import Characters from '../Characters/Characters'

const CharacterList = ({ characters }) => {
  return (
    <>
      {characters.map((character) => (
        <Characters key={character.id} character={character} />
      ))}
    </>
  )
}

export default CharacterList
