import React from 'react';

export default function TechCard({ icon, name}) {
  return (
    <div className=" w-full mx-auto border-2 border-transparent rounded-xl p-2 sm:p-3 hover:scale-105 transition-all duration-300">
      <div className={`w-fit h-fit rounded-lg flex items-center justify-center mb-2 sm:mb-3 mx-auto`}>
        <img src={icon} alt={name} className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 object-contain" />
      </div>
      <h3 className="text-white font-semibold text-center w-fit mx-auto text-xs sm:text-sm md:text-base">{name}</h3>
    </div>
  );
}

