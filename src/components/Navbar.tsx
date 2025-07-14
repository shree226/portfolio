import React from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home", icon: (
    <svg className="w-5 h-5 inline-block mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m0 0h4m-4 0a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2z" /></svg>
  ) },
  { name: "About", href: "#about", icon: (
    <svg className="w-5 h-5 inline-block mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.797.657 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  ) },
  { name: "Projects", href: "#projects", icon: (
    <svg className="w-5 h-5 inline-block mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 0a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2m-6 0h6" /></svg>
  ) },
  { name: "Contact", href: "#contact", icon: (
    <svg className="w-5 h-5 inline-block mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5a8.38 8.38 0 01-1.9.82 4.48 4.48 0 00-7.6 0A8.38 8.38 0 013 10.5m9 7.5v-3m0 0a4.5 4.5 0 01-4.5-4.5V7a4.5 4.5 0 019 0v3a4.5 4.5 0 01-4.5 4.5z" /></svg>
  ) },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#181c2a]/80 backdrop-blur border-b border-purple-900/40 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Brand */}
        <span className="font-mono font-extrabold text-2xl text-purple-400 tracking-tight">IshaanArora</span>
        {/* Links */}
        <div className="space-x-2 hidden md:flex items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-white font-mono px-3 py-2 rounded-lg hover:bg-purple-900/30 hover:text-purple-300 transition-colors flex items-center">
              {link.icon}{link.name}
            </Link>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="ml-4 px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-mono font-bold shadow-lg hover:from-pink-500 hover:to-purple-500 transition-all">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
} 