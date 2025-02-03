import React from 'react'
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <div>
        
        <div className='h-full pt-12  w-screen pl-12  bg-slate-200 ' >
<h2 className='text-blue-400 font-semibold text-xl pt-10'>Contacts</h2>
<h1 className='text-gray-900 font-extrabold text-3xl pt-3'>Get in touch</h1>
<p className='text-sm text-gray-500 pt-5'>hfareed376@gmail.com</p>
 <div className='flex flex-row gap-3 pt-3'>
 <FaInstagram size={30} />
 <FaLinkedin size={30} />
 <FaGithub size={30} />



         </div> <br /><br />
            <p className='text-left font-semibold'>Copyright © 25/11/2024. Develop & Designed by Hussain Ali</p>
            </div>
    </div>
  )
}

export default Footer
