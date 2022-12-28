import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='fixed top-0 left-0 z-50 flex items-center px-5 py-2 h-[7vh]'>
      {/* Logo */}
      <Link to='/'>
        <p className='text-white text-2xl'>ww<span className='text-red-500 font-bold'>movies</span></p>
      </Link>
    </nav>
  )
}

export default Navbar