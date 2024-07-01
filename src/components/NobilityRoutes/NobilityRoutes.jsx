import React, { useContext, useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import CharacterList from '../CharacterList/CharacterList'
import { findRoyals } from '../../util/findRoyal';
import { CharactersContext } from '../../context/charactersContext';

const NobilityRoutes = () => {
  const characters = useContext(CharactersContext);
  const [classifiedCharacters, setClassifiedCharacters] = useState({
    kings: [],
    queens: [],
    lords: [],
    ladies: [],
  });

  useEffect(() => {
    const result = findRoyals(characters);
    setClassifiedCharacters(result);
  }, [characters]);

  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='kings' />} />
      <Route path=':type' element={<CharacterList charactersData={classifiedCharacters} />} />
    </Routes>
  );
};

export default NobilityRoutes 
