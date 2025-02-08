import React from 'react';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaPhp, FaLaravel, FaJs, FaPython } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

function Skills() {
  return (
    <div id='skills' className='flex flex-col justify-center items-center bg-slate-300 h-80 w-full py-12'>
      <h2 className='text-lg text-blue-400 font-medium'>Skills</h2>
      <h1 className='text-4xl text-gray-900 font-semibold'>What I am capable of?</h1><br />

      <div className="flex space-x-6 items-center justify-center pt-9 p-4 rounded-md">
        <FaHtml5 size={80} color="#E34F26" className="hover:scale-110 transition-transform duration-300" />
        <FaCss3Alt size={80} color="#1572B6" className="hover:scale-110 transition-transform duration-300" />
        <FaBootstrap size={80} color="#7952B3" className="hover:scale-110 transition-transform duration-300" />
        <SiTailwindcss size={80} color="#06B6D4" className="hover:scale-110 transition-transform duration-300" />
        <FaPhp size={80} color="#777BB4" className="hover:scale-110 transition-transform duration-300" />
        <FaLaravel size={80} color="#FF2D20" className="hover:scale-110 transition-transform duration-300" />
        <FaJs size={80} color="#F7DF1E" className="hover:scale-110 transition-transform duration-300" />
        <FaPython size={80} color="#3776AB" className="hover:scale-110 transition-transform duration-300" />
      </div>
    </div>
  );
}

export default Skills;