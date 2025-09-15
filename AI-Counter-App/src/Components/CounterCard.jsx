import React from 'react';

const CounterCard = ({
  count,
  isMilestone,
  aiMsg,
  loading,
  readOnly = false, // landing page demo
}) => {
  return (
    <div className='bg-[#1D1F1A] p-6 rounded-2xl shadow-lg w-full  max-w-sm md:max-w-md lg:max-w-lg mx-auto flex flex-col items-center'>
      
      {/* Number Display */}
      <div className='text-[#FBFFFA] text-6xl md:text-8xl lg:text-8xl font-extrabold   min-h-[100px] md:min-h-[200px] lg:min-h-[150px]'>
        {count}
      </div>

      {/* Milestone message */}
      {isMilestone && (
        <p className='text-[#FFD700] mb-2'>Milestone Reached!</p>
      )}

      {/* AI says label + input */}
      <div className='w-full flex flex-col items-start'>
        <span className='text-[#6B6D68] mb-6'>AI says:</span>
        <input
          type='text'
          value={aiMsg}
          readOnly
          className='w-full bg-[#12140F] outline-none border border-[#12140F] rounded-lg px-4 py-2 mb-6 text-[#828781] text-center'
        />
      </div>
    </div>
  );
};

export default CounterCard;
