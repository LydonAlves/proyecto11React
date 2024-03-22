import { Link } from 'react-router-dom'
import './Characters.css'

import React from 'react'

const Characters = ({ character }) => {
  return (
    <Link
      key={character?.id}
      to={`/character/${character?.id}`}
      className='characterLink'
    >
      <div className='characterContainer'>
        <h1 className='characterName'> {character?.fullName} </h1>
        <div className='characterImgContainer'>
          <img
            src={character?.imageUrl}
            alt={character?.fullName}
            className='characterImage'
          />
        </div>
      </div>
    </Link>
  )
}

export default Characters
