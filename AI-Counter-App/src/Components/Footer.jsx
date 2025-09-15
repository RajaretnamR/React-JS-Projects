// src/components/Footer.jsx
import React from "react";
import { Github } from 'lucide-react'; // icon use panna

const Footer = () => {
  return (
    <div className=" bg-[#0F0F0F] text-gray-400 py-16 px-6 flex items-center justify-between text-sm ">
      {/* Left side text */}
      <p className="text-[13px]">
        Built for learning. Design inspired by Awwwards aesthetics.
      </p>

      {/* Right side link */}

        <div className="flex gap-2 items-center">
            <Github size={20}/>
            <span>View Source</span>
        </div>

    </div>
  );
};

export default Footer;
