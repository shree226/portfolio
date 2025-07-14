import React from "react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.855 2.01-.855 3.17 0 2.188 1.115 4.116 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-800 bg-transparent text-gray-400 text-sm mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 px-4">
        {/* Left: Branding */}
        <div className="flex-1 mb-8 md:mb-0">
          <h2 className="font-mono font-extrabold text-2xl text-purple-400 mb-2">CosmicPortfolio</h2>
          <p className="text-gray-300 mb-4 max-w-xs">Crafting digital experiences that are out of this world. Exploring the universe of web development one project at a time.</p>
          <div className="flex space-x-4 mt-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        {/* Center: Quick Links */}
        <div className="flex-1 mb-8 md:mb-0 flex flex-col items-center">
          <h3 className="font-mono font-bold text-lg text-white mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#home" className="hover:text-purple-400 transition-colors font-mono">Home</a></li>
            <li><a href="#about" className="hover:text-purple-400 transition-colors font-mono">About</a></li>
            <li><a href="#projects" className="hover:text-purple-400 transition-colors font-mono">Projects</a></li>
            <li><a href="#contact" className="hover:text-purple-400 transition-colors font-mono">Contact</a></li>
          </ul>
        </div>
        {/* Right: Contact Info */}
        <div className="flex-1 flex flex-col items-end">
          <h3 className="font-mono font-bold text-lg text-white mb-2">Contact</h3>
          <p className="text-gray-300 font-mono">Delhi, India</p>
          <p className="text-gray-300 font-mono">ishaana612@gmail.com</p>
          <p className="text-gray-300 font-mono">+91 9821430047</p>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} CosmicPortfolio. All rights reserved.
      </div>
    </footer>
  );
} 