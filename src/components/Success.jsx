import React from 'react'
import { Link } from 'react-router-dom'

function Success() {
  return (
    <div className='w-100 h-100'>
      Congrats <br /> <br />
      <Link 
        to="/" 
        className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
      >
        Return to Home Page
      </Link>
    </div>
  )
}

export default Success
