import React from 'react'

const FeatureBox = ({ title , desc }) => {
  return (
    <div className="bg-[#1D1F1A] p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-[#858F87] text-sm">{desc}</p>
    </div>
  )
}

export default FeatureBox