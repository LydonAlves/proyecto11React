import React, { useEffect, useState } from 'react'
import './Home.css'
import { findRoyals } from '../../util/findRoyal'
import CharacterList from '../../components/CharacterList/CharacterList'
import Loading from '../../components/Loading/Loading'

const Home = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://thronesapi.com/api/v2/Characters')
      .then((res) => res.json())
      .then((res) => setCharacters(res))
    setLoading(false)
  }, [])

  findRoyals(characters)

  return (
    <main>
      <section className='charactersSection'>
        {loading && <Loading />}
        <CharacterList characters={characters} />
      </section>
    </main>
  )
}

export default Home
