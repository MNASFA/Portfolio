import React from 'react'

function Item({edu_title, edu_duration, edu_description, exp_title, exp_duration, exp_description}) {
  return (
        <>
            {/* Education Item 1 */}
            <div className="relative flex items-center">
              {/* Left Side - Education */}
              <div className="w-1/2 pr-12 text-right">
                <h4 className="text-3xl font-bold mb-3">{edu_title}</h4>
                <p className="text-gray-400 mb-3">{edu_duration}</p>
                <p className="mt-2 whitespace-pre-line">{edu_description}</p>
              </div>
              
              {/* Center Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-orange-600 rounded-full border-4 border-gray-900"></div>
              
              {/* Right Side - Empty */}
              {/* Right Side - Experience */}
              <div className="w-1/2 pl-12 font-bold">
                <h2 className='text-7xl text-orange-600 opacity-50'>EXPERIENCE</h2>
              </div>
            </div>

            {/* Experience Item 1 */}
            <div className="relative flex items-center">
              {/* Left Side - Empty */}
              <div className="w-1/2 pr-12 text-right font-bold">
                <h2 className='text-orange-600 opacity-50 text-7xl'>EDUCATION</h2>
              </div>
              
              {/* Center Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-orange-600 rounded-full border-4 border-gray-900"></div>
              
              {/* Right Side - Experience */}
              <div className="w-1/2 pl-12 text-left">
                <h4 className="text-3xl font-bold mb-3">{exp_title}</h4>
                <p className="mb-3 text-gray-400">{exp_duration}</p>
                <p className="mt-2 whitespace-pre-line">{exp_description}</p>
              </div>
            </div>
        </>
  )
}

export default Item
