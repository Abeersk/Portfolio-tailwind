import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="h-full pt-12 w-screen pl-12 bg-slate-200 ">
      <h2 className="text-blue-400 font-semibold text-xl pt-10">Contacts</h2>
      <h1 className="text-gray-900 font-extrabold text-3xl pt-3">Get in touch</h1>
      <p className="text-sm text-gray-500 pt-5">shayanshaikh@gmail.comx</p>
      <div className="flex flex-row gap-3 pt-3 justify-center">
        <FaInstagram size={30} className="hover:text-blue-500 transition-colors duration-300" />
        <FaLinkedin size={30} className="hover:text-blue-700 transition-colors duration-300" />
        <FaGithub size={30} className="hover:text-gray-700 transition-colors duration-300" />
      </div>
      <br />
      <p className=" font-semibold text-center ">Copyright © 25/11/2024. Developed & Designed by Muhammad Abeer</p>
    </div>
  );
}

export default Footer;