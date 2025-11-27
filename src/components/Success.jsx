import React from 'react'
import { Link } from 'react-router-dom'
import success_img from '../assets/sent.svg'

function Success() {
  return (
    <section className='h-screen w-full flex items-center justify-center bg-neutral-950'>
      <div className='flex flex-col items-center text-center space-y-8 max-w-2xl'>
        <img 
          src={success_img} 
          alt="Success" 
          className='w-full max-w-md select-none'
        />
        <p className='text-gray-300 text-lg sm:text-xl leading-relaxed'>
          Thank you for reaching out! Your message has safely landed in my inbox and I will respond as soon as possible.
        </p>
        <Link 
          to="/" 
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105"
        >
            Return to Home Page
        </Link>
      </div>
    </section>
  )
}

export default Success
