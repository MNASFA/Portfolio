import React, { useState } from 'react';
import TechCard from './TechCard';

import htmlicon from '../assets/html-5-svgrepo-com.svg';
import cssicon from '../assets/css-3-svgrepo-com.svg';
import jsicon from '../assets/js-svgrepo-com.svg';
import reacticon from '../assets/reactjs-svgrepo-com.svg';
import nexticon from '../assets/nextjs-fill-svgrepo-com.svg';
import tailwindicon from '../assets/tailwindcss-icon-svgrepo-com.svg';
import bootstrapicon from '../assets/bootstrap-svgrepo-com.svg';
import cicon from '../assets/c-1.svg';
import sqlicon from '../assets/sql-database-generic-svgrepo-com.svg';
import cpp from '../assets/c.svg';

//tools
import vscodeicon from '../assets/visual-studio-code-1.svg';
import githubicon from '../assets/Github--Streamline-Unicons.svg';
import giticon from '../assets/git-icon.svg';
import canvaicon from '../assets/canva-wordmark-2.svg';
import linuxicon from '../assets/linux-tux-svgrepo-com.svg';
import tldrawicon from '../assets/Tldraw--Streamline-Simple-Icons.svg';
import npmicon from '../assets/npm.svg';
import viteicon from '../assets/vitejs.svg';


export default function SkillsToggle() {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = [
    { icon: htmlicon, name: "HTML" },
    { icon: cssicon, name: "CSS" },
    { icon: jsicon, name: "JavaScript" },
    { icon: reacticon, name: "React.js" },
    { icon: nexticon, name: "Next.js" },
    { icon: tailwindicon, name: "Tailwind" },
    { icon: bootstrapicon, name: "Bootstrap" },
    { icon: cicon, name: "C Language" },
    { icon: cpp, name: "C++" },
    { icon: sqlicon, name: "SQL" },
  ];

  const tools = [
    { icon: vscodeicon, name: "VS Code" },
    { icon: githubicon, name: "GitHub" },
    { icon: giticon, name: "Git" },
    { icon: canvaicon, name: "Canva" },
    { icon: linuxicon, name: "Linux" },
    { icon: tldrawicon, name: "Tldraw" },
    { icon: npmicon, name: "NPM" },
    { icon: viteicon, name: "Vite" },
  ];

  const currentData = activeTab === 'skills' ? skills : tools;

  return (
    <div className='flex flex-col lg:flex-row justify-between gap-8 lg:gap-8'>
      {/* Left Side */}
      <div className="left_side w-full lg:w-1/2 text-center lg:text-left">
        <div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-bold'>
            These are My
            <br />
            Programming skills and 
            <br />
            Some Tools That I am
            <br />
            Using.
          </h2>

         <div className='flex items-center justify-center lg:justify-start pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-10'>
            <strong className='mr-3 font-light text-base sm:text-lg lg:text-xl'>Toggle the button</strong> 
            <svg 
                fill="#FF6B35" 
                height="20px" 
                width="20px" 
                version="1.1" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 490 490"
                className="animate-bounce"
            >
                <polygon points="366.291,109.411 244.998,233.196 123.709,109.411 161.578,72.429 244.998,157.564 328.422,72.429"/>
                <polygon points="490,167.534 244.996,417.571 0,167.534 76.493,92.832 244.996,264.8 413.507,92.832"/>
            </svg>
            </div>
        </div>

        {/* Toggle Buttons */}
        <div className="mb-8 sm:mb-10 lg:mb-12 h-fit w-fit mx-auto lg:mx-0 border-2 border-orange-600 rounded-lg">
          <button
            onClick={() => setActiveTab('skills')}
            className={`cursor-pointer px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300 ${
              activeTab === 'skills'
                ? 'bg-orange-600 text-white'
                : 'text-white hover:text-orange-600'
            }`}
          >
            Skills
          </button>
          <button
            onClick={() => setActiveTab('tools')}
            className={`cursor-pointer px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300 ${
              activeTab === 'tools'
                ? 'bg-orange-600 text-white'
                : 'text-white hover:text-orange-600'
            }`}
          >
            Tools
          </button>
        </div>
      </div>

      {/* Right Side - Cards Grid with Staggered Animation */}
      <div className="right_side w-full lg:w-1/2">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
          {currentData.map((item, index) => (
            <div
              key={`${activeTab}-${index}`}
              style={{ animationDelay: `${index * 50}ms` }}
              className="animate-slideUp"
            >
              <TechCard
                icon={item.icon}
                name={item.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}