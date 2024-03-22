import React, { useEffect, useState } from 'react'
import './Character.css'
import { useParams } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'

const Character = () => {
  const { id } = useParams()
  const [character, setCharacter] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
      .then((res) => res.json())
      .then((res) => setCharacter(res))
    setLoading(false)
  }, [])

  return (
    <section className='indCharacterSection'>
      {loading && <Loading />}
      <div className='indCharacterContainer'>
        <div className='indCharacterImgContainer'>
          <img
            src={character?.imageUrl}
            alt={character?.fullName}
            className='characterImage'
          />
        </div>
        <h1 className='indCharacterName'> {character?.fullName} </h1>
        <p className='indTitle'>Family:</p>
        <p className='characterInfo'>{character?.family}</p>
        <p className='indTitle'>Title:</p>
        <p className='characterInfo'>{character?.title}</p>
      </div>
    </section>
  )
}

export default Character
