import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (


        <nav className='fixed w-full  lg:w-full mx-auto  py-3 border-b border-[#446713]/30 bg-[#0b0f0a] '>
            <Link to="/" >
                <a href="#" className='flex items-center gap-3 lg:pl-50'>
                    <div className='h-8 w-8 rounded-xl bg-[#446713] shadow-lg'></div>
                
                    <span className='font-semibold tracking-tight'>AI Counter</span>
                </a>
            </Link>
        </nav>
  )
}

export default Nav