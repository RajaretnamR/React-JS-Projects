import React, { useState } from 'react'
import Nav from '../Components/Nav'
import { mockAiMessage } from '../lib/ai'
import { RotateCcw } from 'lucide-react';
import Milestones from '../Components/Milestone';
// import { faGithub } from 'lucide-react';
import Footer from '../Components/Footer';

const Counter = () => {
  const [count, setCount] = useState(0)

  // Buttons functions
  const handleInc = () => setCount((count) => count + 1)
  const handleDec = () => setCount((count) => count - 1)
  const handleReset = () => setCount(0)

  return (
    <div className="min-h-screen bg-[#0b0f0a] text-white flex flex-col">
      {/* Navbar */}
      <Nav />

      {/* Main Wrapper */}
      <div className="flex flex-col items-center justify-center flex-grow px-4 py-6 mt-20">
        {/* Counter Box */}
        <div className="bg-[#1D1F1A] p-6 sm:p-10 rounded-2xl shadow-lg 
                        w-full max-w-2xl 
                        flex flex-col items-center justify-center gap-6">
          
          {/* Counter Number */}
          <h1 className="text-6xl sm:text-7xl font-bold">{count}</h1>

          {/* 3 Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center ">
            <button
              onClick={handleDec}
              className="bg-[#0b0f0a] text-white/80 px-8 py-3 rounded-xl text-lg sm:text-xl hover:scale-105 transition-transform duration-300"
            >
              -1
            </button>
            <button
              onClick={handleReset}
              className="bg-[#0b0f0a] text-white/80 px-8 py-3 rounded-xl text-lg sm:text-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <RotateCcw size={20} />
              Reset
            </button>
            <button
              onClick={handleInc}
              className="bg-[#0b0f0a] text-white/80 px-8 py-3 rounded-xl text-lg sm:text-xl hover:scale-105 transition-transform duration-300"
            >
              +1
            </button>
          </div>

          {/* AI Quote Section */}
          <div className="w-full flex flex-col items-start mt-4 sm:mt-8">
            <span className="text-lg font-semibold mb-2 text-[#6B6D68]">AI says :</span>
            
            {/* Input-like Box */}
            <textarea
              readOnly
              value={mockAiMessage(count)}
              className="w-full bg-[#0b0f0a] text-white/70 px-6 py-4 rounded-xl resize-none"
              rows={2}
            />

          </div>
        </div>
        <div className='max-w-6xl mx-auto'>
           
          <Milestones count={count} />
    <Footer />
        </div>
      </div>

      
            
    </div>
  )
}

export default Counter
