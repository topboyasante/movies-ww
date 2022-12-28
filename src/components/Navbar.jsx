import React from 'react'

function Navbar() {
  return (
    <nav className='flex items-center px-5 py-2 h-[7vh]'>
      {/* Logo */}
      <div>
        <p className='text-white text-2xl'>ww<span className='text-red-500 font-bold'>movies</span></p>
      </div>
    </nav>
  )
}

export default Navbar