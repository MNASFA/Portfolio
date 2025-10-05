import React from 'react'
import { useState } from 'react'
import profilepic from '../assets/hmnasfa.jpg'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false) // For mobile menu

  return (
    <nav className="w-full navbar text-gray">
      <div className="max-w-5/6 mx-auto px-6 flex justify-between items-center">
        {/* Logo / Name */}
        <h4 className="logo text-8xl">Hm<span className='font-bold text-orange-600'>.</span></h4>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#hero" className="text-3xl hover:text-orange-600 text-orange-600 px-2 activelink">Home</a></li>
          <li><a href="#about" className="text-3xl hover:text-orange-600 px-3">About</a></li>
          <li><a href="#projects" className="text-3xl hover:text-orange-600 px-3">Projects</a></li>
          <li><a href="#contact" className="text-3xl hover:text-orange-600 px-3">Skills</a></li>
          <li><a href="#contact" className="text-3xl hover:text-orange-600 px-3">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Profile image */}
        <div className="hidden md:flex items-center">
          <img 
            src={profilepic}
            alt="Profile" 
            className="h-15 w-15 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-orange-600 shadow-md px-10 py-6 space-y-4">
          <li><a href="#hero" className="text-gray hover:text-neutral-950">Home</a></li>
          <li><a href="#about" className="text-gray hover:text-neutral-950">About</a></li>
          <li><a href="#projects" className="text-gray hover:text-neutral-950">Projects</a></li>
          <li><a href="#contact" className="text-gray hover:text-neutral-950">Skills</a></li>
          <li><a href="#contact" className="text-gray hover:text-neutral-950">Contact</a></li>
        </ul>
      )}


    </nav>
  
  )
}

export default Navbar
