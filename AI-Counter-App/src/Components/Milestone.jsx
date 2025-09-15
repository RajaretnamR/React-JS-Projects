import React from "react";

const milestones = [1, 10, 25, 50, 75, 100, 250, 500, 1000];

const Milestones = ({ count }) => {
  return (
    <div className="flex flex-col items-start mt-8 ">
      {/* Heading */}
      <h3 className="text-lg font-semibold text-gray-300 mb-3">Milestones</h3>

      {/* Milestone numbers */}
      <div className="flex gap-3">
        {milestones.map((num) => (
          <span
            key={num}
            className={`px-6 py-2 rounded-3xl text-sm font-medium 
              transition-all duration-300 
              ${count >= num 
                ? "bg-[#446713] text-white border-[#446713]" 
                : "bg-[#1D1F1A] text-gray-400 border-[#333]"
              }`}
          >
            {num}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Milestones;
