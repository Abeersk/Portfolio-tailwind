
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose,  } from "react-icons/ai"; // Import icons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-slate-800 text-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <h1 className="text-xl font-bold">My Portfolio</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm">
          <Link href="/" className="hover:text-blue-300">Home</Link>
          <Link href="#about" className="hover:text-blue-300">About Me</Link>
          <Link href="#skills" className="hover:text-blue-300">Skills</Link>
          <Link href="#projects" className="hover:text-blue-300">Projects</Link>
          <Link href="#contact" className="hover:text-blue-300">Contact</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Navigation - Now fully hidden when closed */}
      <div
        className={`absolute top-16 left-0 w-full bg-slate-800 transition-all ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 py-6 text-sm">
          <Link href="/" className="hover:text-blue-300" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="#Aboutme" className="hover:text-blue-300" onClick={() => setMenuOpen(false)}>
            About Me
          </Link>
          <Link href="#skills" className="hover:text-blue-300" onClick={() => setMenuOpen(false)}>
            Skills
          </Link>
          <Link href="#project" className="hover:text-blue-300" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
          <Link href="/Footer" className="hover:text-blue-300" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
