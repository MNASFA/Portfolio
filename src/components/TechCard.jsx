import React from 'react';

export default function TechCard({ icon, name}) {
  return (
    <div className=" w-fit mx-auto border-2 border-transparent rounded-xl p-3 hover:scale-105 transition-all duration-300">
      <div className={`w-fit h-fit rounded-lg flex items-center justify-center mb-3 mx-auto`}>
        <img src={icon} alt={name} className="w-18 h-18 object-contain" />
      </div>
      <h3 className="text-white font-semibold text-center w-fit mx-auto">{name}</h3>
    </div>
  );
}

