import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Nobility from './pages/Nobility/Nobility'
import Character from './pages/Character/Character'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/character/:id' element={<Character />} />
        <Route path='/nobility/*' element={<Nobility />} />
      </Routes>
    </>
  )
}

export default App
