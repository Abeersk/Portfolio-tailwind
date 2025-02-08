"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header className="bg-blue-800 text-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>

        <nav className="hidden md:flex gap-8 text-sm">
          <Link href="/" className="hover:text-blue-300 transition-colors duration-300">
            Home
          </Link>
          <Link
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="hover:text-blue-300 transition-colors duration-300"
          >
            About Me
          </Link>
          <Link
            href="#skills"
            onClick={(e) => handleScroll(e, "skills")}
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            onClick={(e) => handleScroll(e, "projects")}
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      <div
        className={`absolute top-16 left-0 w-full bg-slate-800 transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 py-6 text-sm">
          <Link
            href="/"
            className="hover:text-blue-300 transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="hover:text-blue-300 transition-colors duration-300"
          >
            About Me
          </Link>
          <Link
            href="#skills"
            onClick={(e) => handleScroll(e, "skills")}
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            onClick={(e) => handleScroll(e, "projects")}
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
