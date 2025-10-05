import React from 'react'
import { useState } from 'react'
import profilepic from '../assets/hmnasfa.jpg'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false) // For mobile menu

  return (
    <nav className="fixed top-0 left-0 w-full z-50 navbar text-gray">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="logo">Hm<span className='font-bold text-orange-600'>.</span></h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#hero" className=" hover:text-orange-600">Home</a></li>
          <li><a href="#about" className=" hover:text-orange-600">About</a></li>
          <li><a href="#projects" className=" hover:text-orange-600">Projects</a></li>
          <li><a href="#contact" className=" hover:text-orange-600">Skills</a></li>
          <li><a href="#contact" className=" hover:text-orange-600">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Profile image */}
        <div className="hidden md:flex items-center">
          <img 
            src={profilepic}
            alt="Profile" 
            className="h-12 w-12 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <li><a href="#hero" className="text-gray-700 hover:text-orange-600">Home</a></li>
          <li><a href="#about" className="text-gray-700 hover:text-orange-600">About</a></li>
          <li><a href="#projects" className="text-gray-700 hover:text-orange-600">Projects</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-orange-600">Skills</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-orange-600">Contact</a></li>
        </ul>
      )}


    </nav>
  
  )
}

export default Navbar
