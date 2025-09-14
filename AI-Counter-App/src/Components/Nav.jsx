import React from 'react'

const Nav = () => {
  return (


        <nav className='fixed top-0 left-0 w-full max-w-6xl mx-auto px-5 py-3 border-b border-[#446713]/30 bg-[#0b0f0a] z-50'>
            <a href="#" className='flex items-center gap-3'>
                <div className='h-8 w-8 rounded-xl bg-[#446713] shadow-lg'></div>
                <span className='font-semibold tracking-tight'>AI Counter</span>
            </a>
        </nav>
  )
}

export default Nav