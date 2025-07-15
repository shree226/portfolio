"use client"; // Keep this if you use client-side hooks or components like Framer Motion here
import React from 'react';
import { motion } from "framer-motion"; // Make sure framer-motion is installed: npm install framer-motion
import GalaxyBackground from '@/components/stars/galaxybg';

//import GalaxyBackground from './GalaxyBackground';
const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/",
        icon: (
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/",
        icon: (
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" />
            </svg>
        ),
    },
    {
        name: "Twitter",
        href: "https://twitter.com/",
        icon: (
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.855 2.01-.855 3.17 0 2.188 1.115 4.116 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z" />
            </svg>
        ),
    },
];

export default function Home() {
    return (
        <>
            <section
              id="home"
              className="min-h-screen bg-transparent flex flex-col justify-center items-center text-center py-24 md:py-32 relative overflow-hidden"
              // Or if you want a subtle background:
              // className="min-h-screen bg-black/50 flex flex-col justify-center items-center text-center py-24 md:py-32 relative overflow-hidden"
            >
                
                <div className="relative z-10 flex flex-col items-center justify-center w-full">
                    <p className="text-lg md:text-xl text-purple-400 font-mono mb-2">Welcome to my cosmic portfolio</p>
                    <h1 className="font-mono font-extrabold text-4xl md:text-6xl lg:text-7xl mb-2 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 text-transparent bg-clip-text leading-tight">
                        Exploring Shree's <br className="hidden md:inline" /> Universe
                    </h1>
                    <h2 className="font-mono font-extrabold text-3xl md:text-5xl lg:text-6xl mb-4 text-white leading-tight">
                        of Endless Creation
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-300 text-base md:text-lg mb-8">
                        Creating stellar digital experiences with modern technologies and cosmic design. Embark on a journey through my universe of projects.
                    </p>
                    <div className="flex items-center justify-center space-x-8 mb-8">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                                className="text-gray-300 hover:text-purple-400 transition-colors"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <span className="animate-bounce text-purple-400 text-3xl">↓</span>
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section id="about" className="relative py-24 md:py-32 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center px-4">
                
                {/* 3+ Years Cosmic Ring */}
                <div className="relative flex-shrink-0 flex items-center justify-center w-full md:w-1/2 mb-12 md:mb-0">
                    <div className="relative flex items-center justify-center">
                        <div className="w-64 h-64 rounded-full border-4 border-purple-500/40 flex items-center justify-center animate-pulse bg-gradient-to-br from-purple-900/30 to-transparent">
                            <div className="w-40 h-40 rounded-full bg-[#181c2a] flex flex-col items-center justify-center">
                                <span className="text-4xl font-mono font-bold text-purple-400">3+ Years</span>
                                <span className="text-base font-mono text-gray-400 mt-2 text-center">Exploring the Digital Universe</span>
                            </div>
                        </div>
                        {/* Cosmic orbs */}
                        <span className="absolute top-4 left-4 w-6 h-6 bg-yellow-400/60 rounded-full blur-sm animate-pulse" />
                        <span className="absolute bottom-8 right-8 w-4 h-4 bg-purple-400/60 rounded-full blur-sm animate-pulse" />
                        <span className="absolute top-1/2 right-0 w-3 h-3 bg-pink-400/60 rounded-full blur-sm animate-pulse" />
                    </div>
                </div>
                {/* About Content */}
                <div className="relative z-10 w-full md:w-1/2 flex flex-col items-start md:pl-12">
                    <span className="inline-block px-4 py-1 mb-2 bg-purple-900/60 text-purple-300 font-mono rounded-full text-sm">About Me</span>
                    <h2 className="font-mono font-extrabold text-4xl md:text-5xl text-purple-400 mb-2 underline underline-offset-8 decoration-purple-500">Cosmic Explorer</h2>
                    <h3 className="font-mono font-bold text-2xl md:text-3xl text-white mb-4">Hello, Space Traveler!</h3>
                    <p className="text-gray-200 mb-4 leading-relaxed">
                        Hey! I'm <span className="text-purple-400 font-bold">Ishaan Arora</span>; thanks for stopping by! I'm a CSE student at IIIT <span className="text-blue-400">Delhi</span> who loves web development, spaceships, open-source, and competitive programming. I have just cracked <a href="#" className="text-blue-400 underline">GSoC</a> – Google Summer of Code in my first year and made my way to <a href="#" className="text-yellow-400 underline">Open Science Labs</a>. I'm currently also a research intern at <a href="#" className="text-pink-400 underline">Cosy Labs</a>, diving into computational gastronomy. You'll often find me at hackathons, building something exciting. So far, I've worked on projects like <a href="#" className="text-pink-400 underline">Aasra</a>, <a href="#" className="text-pink-400 underline">Sukhi Saheli</a>, and <a href="#" className="text-pink-400 underline">Brain Reel</a>, reflecting my passion for innovation and problem-solving.
                    </p>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                        My journey began 3 years ago, when I built my first website and since then, I've been navigating through various technologies and design principles to craft websites and applications that are not just functional but visually stellar.
                    </p>
                    <h4 className="font-mono font-bold text-xl md:text-2xl text-white mb-2 mt-4">Skills & Technologies</h4>
                    <div className="flex flex-wrap gap-3 mb-2">
                        {['React', 'Next.js', 'TailwindCSS', 'Django', 'Python', 'Html', 'Vue.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Postgresql', 'Git'].map(skill => (
                            <span key={skill} className="px-4 py-2 bg-purple-900/70 text-purple-200 font-mono rounded-full text-sm shadow border border-purple-700/40">{skill}</span>
                        ))}
                    </div>
                </div>
            </section>

            

            {/* PROJECTS SECTION */}
            <section id="projects" className="relative py-24 md:py-32 max-w-6xl mx-auto px-4">
                
                <div className="flex flex-col items-center mb-8">
                    <span className="inline-block px-4 py-1 mb-2 bg-purple-900/60 text-purple-300 font-mono rounded-full text-sm">My Work</span>
                    <h2 className="font-mono font-extrabold text-4xl md:text-5xl text-purple-400 mb-2 underline underline-offset-8 decoration-purple-500">Stellar Projects</h2>
                    <p className="max-w-2xl mx-auto text-gray-300 text-base md:text-lg mb-2 text-center">
                        Explore my universe of web projects, from interactive 3D experiences to functional applications.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Project Card 1 */}
                    <div className="relative group bg-gradient-to-br from-purple-900/60 to-transparent rounded-xl shadow-lg overflow-hidden p-1">
                        <div className="bg-[#181c2a] rounded-lg h-full p-6 flex flex-col justify-between">
                            <div>
                                <div className="h-48 bg-gray-800 flex items-center justify-center rounded-lg mb-4">
                                    <span className="text-6xl text-purple-400">📷</span>
                                </div>
                                <h3 className="font-mono font-bold text-2xl text-purple-300 mb-2">Project One</h3>
                                <p className="text-gray-300 mb-2">A brief description of your project goes here.</p>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {['React', 'Next.js', 'TailwindCSS'].map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-purple-900/70 text-purple-200 font-mono rounded-full text-xs border border-purple-700/40">{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex space-x-4 mt-4">
                                <a href="#" className="text-purple-400 hover:text-pink-400 transition-colors underline">GitHub</a>
                                <a href="#" className="text-purple-400 hover:text-pink-400 transition-colors underline">Live Demo</a>
                            </div>
                        </div>
                    </div>
                    {/* Project Card 2 */}
                    <div className="relative group bg-gradient-to-br from-pink-900/60 to-transparent rounded-xl shadow-lg overflow-hidden p-1">
                        <div className="bg-[#181c2a] rounded-lg h-full p-6 flex flex-col justify-between">
                            <div>
                                <div className="h-48 bg-gray-800 flex items-center justify-center rounded-lg mb-4">
                                    <span className="text-6xl text-pink-400">📷</span>
                                </div>
                                <h3 className="font-mono font-bold text-2xl text-pink-300 mb-2">Project Two</h3>
                                <p className="text-gray-300 mb-2">A brief description of your project goes here.</p>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {['TypeScript', 'Node.js'].map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-pink-900/70 text-pink-200 font-mono rounded-full text-xs border border-pink-700/40">{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex space-x-4 mt-4">
                                <a href="#" className="text-pink-400 hover:text-purple-400 transition-colors underline">GitHub</a>
                                <a href="#" className="text-pink-400 hover:text-purple-400 transition-colors underline">Live Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* OPEN SOURCE SECTION */}
            <section id="contributions" className="relative py-24 md:py-32 max-w-6xl mx-auto px-4">
                
                <div className="flex flex-col items-center mb-8">
                    <span className="inline-block px-4 py-1 mb-2 bg-purple-900/60 text-purple-300 font-mono rounded-full text-sm">Contributions</span>
                    <h2 className="font-mono font-extrabold text-4xl md:text-5xl text-pink-400 mb-2 underline underline-offset-8 decoration-purple-500">Open Source Impact</h2>
                    <p className="max-w-2xl mx-auto text-gray-300 text-base md:text-lg mb-2 text-center">
                        My contributions to open source projects, helping build and improve the developer community.
                    </p>
                </div>
                <div className="flex justify-center">
                    <div className="w-full max-w-2xl bg-[#181c2a] rounded-2xl p-8 shadow-2xl border border-purple-500/30 relative" style={{ boxShadow: '0 0 40px 8px #a78bfa55' }}>
                        <h3 className="font-mono font-bold text-2xl text-purple-300 mb-2">AlphaOneLabs Education Website</h3>
                        <p className="text-gray-300 mb-4">Contributed to the development of an educational platform, implementing features like team collaboration, course creation, and dark mode support.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {['React', 'Next.js', 'TypeScript'].map(tech => (
                                <span key={tech} className="px-3 py-1 bg-purple-900/70 text-purple-200 font-mono rounded-full text-xs border border-purple-700/40">{tech}</span>
                            ))}
                        </div>
                        <a href="#" className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-purple-400 text-purple-200 font-mono font-bold text-base hover:bg-purple-900/40 transition-all">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" /></svg>
                            View Contributions
                        </a>
                    </div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="relative py-24 md:py-32 max-w-6xl mx-auto px-4">
               
                <div className="flex flex-col md:flex-row items-start justify-between gap-12">
                    {/* Left: Contact Info */}
                    <div className="w-full md:w-1/2 mb-12 md:mb-0">
                        <span className="inline-block px-4 py-1 mb-2 bg-purple-900/60 text-purple-300 font-mono rounded-full text-sm">Get in Touch</span>
                        <h2 className="font-mono font-extrabold text-4xl md:text-5xl text-pink-400 mb-2">Connect Across the Universe</h2>
                        <p className="max-w-lg text-gray-300 text-base md:text-lg mb-6">
                            Ready to collaborate? Send a signal my way and let's create something stellar together.
                        </p>
                        <h3 className="font-mono font-bold text-2xl text-white mb-2">Contact Information</h3>
                        <p className="text-gray-400 mb-6">Fill out the form or reach out directly through the following channels:</p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <span className="bg-purple-900/60 p-3 rounded-full text-purple-300">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v4m0-4V8" /></svg>
                                </span>
                                <span className="text-white font-mono">ishaana612@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="bg-purple-900/60 p-3 rounded-full text-purple-300">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm16 0a2 2 0 00-2-2h-2a2 2 0 00-2 2v14a2 2 0 002 2h2a2 2 0 002-2V5z" /></svg>
                                </span>
                                <span className="text-white font-mono">+91 9821430047</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="bg-purple-900/60 p-3 rounded-full text-purple-300">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243a8 8 0 0011.314-11.314l-4.243-4.243a4 4 0 00-5.657 5.657l4.243 4.243z" /></svg>
                                </span>
                                <span className="text-white font-mono">Delhi, India</span>
                            </div>
                        </div>
                    </div>
                    {/* Right: Glassmorphism Form */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <form className="w-full max-w-md bg-gradient-to-br from-purple-800/80 to-pink-700/60 rounded-2xl p-8 shadow-2xl border border-purple-500/30 relative" style={{ boxShadow: '0 0 40px 8px #a78bfa55' }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-white font-mono mb-1">Name</label>
                                    <input type="text" className="w-full px-4 py-2 rounded bg-[#181c2a] text-white font-mono focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="Your name" required />
                                </div>
                                <div>
                                    <label className="block text-white font-mono mb-1">Email</label>
                                    <input type="email" className="w-full px-4 py-2 rounded bg-[#181c2a] text-white font-mono focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="your@email.com" required />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-white font-mono mb-1">Subject</label>
                                <input type="text" className="w-full px-4 py-2 rounded bg-[#181c2a] text-white font-mono focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="How can I help you?" required />
                            </div>
                            <div className="mb-6">
                                <label className="block text-white font-mono mb-1">Message</label>
                                <textarea className="w-full px-4 py-2 rounded bg-[#181c2a] text-white font-mono focus:outline-none focus:ring-2 focus:ring-pink-400" rows={5} placeholder="Your message here..." required />
                            </div>
                            <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-mono font-bold text-lg shadow-lg flex items-center justify-center gap-2 hover:from-pink-500 hover:to-purple-500 transition-all">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M22 12H2m0 0l7-7m-7 7l7 7" /></svg>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}