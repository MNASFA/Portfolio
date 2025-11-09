import React from 'react'
import { useState } from 'react'
import profilepic from '../assets/hmnasfa.jpg'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false) // For mobile menu

  return (
    <nav className="block w-full navbar text-gray pt-6 pb-6">
      <div className="max-w-5/6 mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo / Name */}
        <h4 className="logo text-4xl sm:text-6xl md:text-7xl lg:text-8xl">Hm<span className='font-bold text-orange-600'>.</span></h4>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-4 xl:space-x-6">
          <li><a href="#" className="text-2xl xl:text-3xl hover:text-orange-600 text-orange-600 px-2 activelink">Home</a></li>
          <li><a href="#about" className="text-2xl xl:text-3xl hover:text-orange-600 px-3">About</a></li>
          <li><a href="#skills" className="text-2xl xl:text-3xl hover:text-orange-600 px-3">Skills</a></li>
          <li><a href="#journey" className="text-2xl xl:text-3xl hover:text-orange-600 px-3">Journey</a></li>
          <li><a href="#projects" className="text-2xl xl:text-3xl hover:text-orange-600 px-3">Projects</a></li>
          <li><a href="#contact" className="text-2xl xl:text-3xl hover:text-orange-600 px-3">Contact</a></li>
        </ul>

        <div className='flex items-center'>
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray text-3xl sm:text-4xl md:text-5xl mr-4 sm:mr-6 menu_icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? "✖" : "☰"}
          </button>

          {/* Profile image */}
          <div className="hidden md:flex items-center">
            <img 
              src={profilepic}
              alt="Profile" 
              className="h-12 w-12 md:h-14 md:w-14 lg:h-15 lg:w-15 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
        }`}
      >
        <ul className="bg-orange-600 shadow-lg px-6 sm:px-10 py-6 space-y-4">
          <li 
            className={`transform transition-all duration-500 ease-out ${
              isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: isOpen ? '0.1s' : '0s' }}
          >
            <a 
              href="#hero" 
              onClick={() => setIsOpen(false)} 
              className="text-xl sm:text-2xl text-gray hover:text-neutral-950 block transition-colors duration-300 py-2"
            >
              Home
            </a>
          </li>
          <li 
            className={`transform transition-all duration-500 ease-out ${
              isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: isOpen ? '0.2s' : '0s' }}
          >
            <a 
              href="#about" 
              onClick={() => setIsOpen(false)} 
              className="text-xl sm:text-2xl text-gray hover:text-neutral-950 block transition-colors duration-300 py-2"
            >
              About
            </a>
          </li>
          <li 
            className={`transform transition-all duration-500 ease-out ${
              isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: isOpen ? '0.3s' : '0s' }}
          >
            <a 
              href="#projects" 
              onClick={() => setIsOpen(false)} 
              className="text-xl sm:text-2xl text-gray hover:text-neutral-950 block transition-colors duration-300 py-2"
            >
              Projects
            </a>
          </li>
          <li 
            className={`transform transition-all duration-500 ease-out ${
              isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: isOpen ? '0.4s' : '0s' }}
          >
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)} 
              className="text-xl sm:text-2xl text-gray hover:text-neutral-950 block transition-colors duration-300 py-2"
            >
              Skills
            </a>
          </li>
          <li 
            className={`transform transition-all duration-500 ease-out ${
              isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: isOpen ? '0.5s' : '0s' }}
          >
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)} 
              className="text-xl sm:text-2xl text-gray hover:text-neutral-950 block transition-colors duration-300 py-2"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>


    </nav>
  
  )
}

export default Navbar
