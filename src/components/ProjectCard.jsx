import React from 'react'

function ProjectCard({url, title, des,link , flag1, flag2, flag3, demoUrl, readmeUrl}) {
  return (
    <div className="w-full">
        <div className="group relative w-full mx-auto bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl  overflow-hidden transition-all duration-300">
            <img src={url} alt={title} className='w-full h-auto object-cover text-gray-300' />
            <div className="px-4 sm:px-6 py-3 sm:py-4">
                <div className="font-bold text-lg sm:text-2xl mb-2 text-gray transition-colors duration-300">{title}</div>
                <p className="text-base text-gray-100">
                  {des}
                </p>
            </div>
            <div className="px-4 sm:px-6 pt-2 sm:pt-4 pb-4">
                <span className="inline-block bg-gray-200 rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-gray-700 mr-2 mb-2">{flag1}</span>
                <span className="inline-block bg-gray-200 rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-gray-700 mr-2 mb-2">{flag2}</span>
                <span className="inline-block bg-gray-200 rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-gray-700 mr-2 mb-2">{flag3}</span>
            </div>
            
            {/* Buttons */}
            <div className="px-4 sm:px-6 pb-4 sm:pb-6 flex gap-3 sm:gap-4">
                <a 
                    href={demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-orange-600 hover:bg-transparent text-gray-300 font-semibold py-2 sm:py-2.5 px-4 sm:px-6 rounded-lg text-sm sm:text-base transition-all duration-300 hover:scale-105 text-center"
                >
                    <i className="fa-solid fa-external-link-alt mr-2"></i>
                    {link}
                </a>
                <a 
                    href={readmeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-transparent text-gray-300 hover:bg-orange-600 font-semibold py-2 sm:py-2.5 px-4 sm:px-6 rounded-lg text-sm sm:text-base transition-all duration-300 hover:scale-105 text-center"
                >
                    <i className="fa-brands fa-readme mr-2"></i>
                    ReadMe
                </a>
            </div>

            {/* Decorative Element */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
    </div>
  )
}

export default ProjectCard
