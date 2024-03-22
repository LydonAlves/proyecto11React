import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Characters from '../Characters/Characters'
import { kings, ladies, lords, queens } from '../../util/findRoyal'
import CharacterList from '../CharacterList/CharacterList'

const NobilityRoutes = () => {
  // console.log(kings)
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='kings' />} />
      <Route path='kings' element={<CharacterList characters={kings} />} />
      <Route path='queens' element={<CharacterList characters={queens} />} />
      <Route path='lords' element={<CharacterList characters={lords} />} />
      <Route path='ladies' element={<CharacterList characters={ladies} />} />
    </Routes>
  )
}

export default NobilityRoutes
