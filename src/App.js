import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import AboutMovie from './pages/AboutMovie'
import Homepage from './pages/Homepage'

function App() {
  return (
    <main className='bg-[#000000]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path=':movieID' element={<AboutMovie/>}/>
      </Routes>
    </main>
    )
}

export default App