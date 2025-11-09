import React from 'react'

function Item({edu_title, edu_duration, edu_description, exp_title, exp_duration, exp_description}) {
  return (
        <>
            {/* Education Item 1 */}
            <div className="relative flex flex-col md:flex-row items-center">
              {/* Left Side - Education */}
              <div className="w-full md:w-1/2 pr-0 md:pr-12 text-center md:text-right mb-4 md:mb-0">
                <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">{edu_title}</h4>
                <p className="text-gray-400 mb-2 sm:mb-3 text-sm sm:text-base">{edu_duration}</p>
                <p className="mt-2 whitespace-pre-line text-sm sm:text-base">{edu_description}</p>
              </div>
              
              {/* Center Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 md:w-5 md:h-5 bg-orange-600 rounded-full border-2 md:border-4 border-gray-900 z-10"></div>
              
              {/* Right Side - Empty */}
              {/* Right Side - Experience */}
              <div className="w-full md:w-1/2 pl-0 md:pl-12 font-bold hidden md:block">
                <h2 className='text-4xl lg:text-5xl xl:text-7xl text-orange-600 opacity-50'>EXPERIENCE</h2>
              </div>
            </div>

            {/* Experience Item 1 */}
            <div className="relative flex flex-col md:flex-row items-center">
              {/* Left Side - Empty */}
              <div className="w-full md:w-1/2 pr-0 md:pr-12 text-right font-bold hidden md:block">
                <h2 className='text-orange-600 opacity-50 text-4xl lg:text-5xl xl:text-7xl'>EDUCATION</h2>
              </div>
              
              {/* Center Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 md:w-5 md:h-5 bg-orange-600 rounded-full border-2 md:border-4 border-gray-900 z-10"></div>
              
              {/* Right Side - Experience */}
              <div className="w-full md:w-1/2 pl-0 md:pl-12 text-center md:text-left mt-4 md:mt-0">
                <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">{exp_title}</h4>
                <p className="mb-2 sm:mb-3 text-gray-400 text-sm sm:text-base">{exp_duration}</p>
                <p className="mt-2 whitespace-pre-line text-sm sm:text-base">{exp_description}</p>
              </div>
            </div>
        </>
  )
}

export default Item
