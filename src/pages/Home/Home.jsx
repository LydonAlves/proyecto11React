import React, { useContext } from 'react'
import './Home.css'
import CharacterList from '../../components/CharacterList/CharacterList'
import Loading from '../../components/Loading/Loading'
import { CharactersContext } from '../../context/charactersContext'

const Home = () => {
  const characters = useContext(CharactersContext);

  return (
    <main>
      <section className='charactersSection'>
        {characters.length === 0 && <Loading />}
        <CharacterList charactersData={characters} />
      </section>
    </main>
  )
}

export default Home
