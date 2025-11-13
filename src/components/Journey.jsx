import React, { useState } from 'react';

export default function MyJourney() {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'education', 'experience'

  const education = [
    {
        title: "1337 Khouribga",
        duration: "Oct 2024 - Present",
        description: `I'm currently studying at 1337 Khouribga, an innovative coding school that follows the 42 Network's peer-to-peer learning model. Through real-world projects, I'm building strong skills in algorithms, C programming, Unix systems, and software development.`,
        icon: "fa-graduation-cap",
        type: "education",
        current: true
    },
    {
        title: "ISTA Hay Hassani 1",
        duration: "September 2020 - July 2022",
        description: `I earned my specialized technician diploma in computer development, where I learned the fundamentals of programming, databases, and web technologies. This experience gave me a solid technical base before joining 1337.`,
        icon: "fa-user-graduate",
        type: "education",
        current: false
    },
    {
        title: "Mohamed Zerktouni High School",
        duration: "2019",
        description: `I completed my baccalaureate in physical sciences, which helped me develop analytical thinking and problem-solving skills that I still apply in my coding journey today.`,
        icon: "fa-school",
        type: "education",
        current: false
    }
  ];

  const experience = [
    {
        title: "Anajah Academy | Projet Freelance",
        duration: "Juin 2023 – Juillet 2023",
        description: "Create a static website for an educational agency specializing in educational consulting in Türkiye.",
        icon: "fa-briefcase",
        type: "experience",
        current: false
    },
    {
        title: "Web Agency | Web Developer",
        duration: "Février 2023 – Mai 2023 | Internship",
        description: `- Editing a complete project (HTML, CSS, Bootstrap).
        - Creating a website (React js, Bootstrap).
        - Creating databases with SQL queries (MySql)`,
        icon: "fa-laptop-code",
        type: "experience",
        current: false
    },
    {
        title: "Nicest Trans | Developer Assistant",
        duration: "Mars 2022 – Avril 2022 | Internship",
        description: `- Creation of Desktop Applications (.Net, C#).
        - Creation of Databases (Sql Server).`,
        icon: "fa-code",
        type: "experience",
        current: false
    }
  ];

  const allItems = [...education, ...experience].sort((a, b) => {
    // Sort by date (most recent first) - simplified sorting
    if (a.current) return -1;
    if (b.current) return 1;
    return 0;
  });

  const getDisplayItems = () => {
    if (activeTab === 'education') return education;
    if (activeTab === 'experience') return experience;
    return allItems;
  };

  return (
    <section id='journey' className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="about_title w-full p-4 sm:p-8 mb-8 sm:mb-12">
            <h2 className="w-fit m-auto text-2xl sm:text-4xl md:text-5xl font-bold text-gray tracking-widest mb-4">
              My Journey
            </h2>
            <p className="text-gray-400 text-center text-base sm:text-lg md:text-2xl mt-4 pt-6">
              My academic background and professional experiences
            </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="inline-flex bg-neutral-900 rounded-xl p-1.5 sm:p-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-orange-600 text-white'
                  : 'text-gray-400 hover:text-orange-600'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-orange-600 text-white'
                  : 'text-gray-400 hover:text-orange-600'
              }`}
            >
              <i className="fa-solid fa-graduation-cap mr-2"></i>
              Education
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 ${
                activeTab === 'experience'
                  ? 'bg-orange-600 text-white'
                  : 'text-gray-400 hover:text-orange-600'
              }`}
            >
              <i className="fa-solid fa-briefcase mr-2"></i>
              Experience
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {getDisplayItems().map((item, index) => (
            <div
              key={`${item.type}-${index}`}
              className={`group relative bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 ${
                item.current
              }`}
            >
              {/* Current Badge */}
              {item.current && (
                <div className="absolute top-4 right-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                  Current
                </div>
              )}

              {/* Icon */}
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-orange-600/20 rounded-xl flex items-center justify-center group-hover:bg-orange-600 transition-all duration-300 group-hover:scale-110">
                  <i className={`fa-solid ${item.icon} text-orange-600 group-hover:text-white text-xl sm:text-2xl md:text-3xl transition-colors duration-300`}></i>
                </div>
              </div>

              {/* Type Badge */}
              <div className="mb-3">
                <span className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                  item.type === 'education' 
                    ? 'bg-blue-600/20 text-blue-400' 
                    : 'bg-purple-600/20 text-purple-400'
                }`}>
                  {item.type === 'education' ? 'Education' : 'Experience'}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray mb-2 sm:mb-3  transition-colors duration-300">
                {item.title}
              </h3>

              {/* Duration */}
              <p className="text-orange-600 text-sm sm:text-base font-medium mb-3 sm:mb-4">
                <i className="fa-solid fa-calendar-days mr-2"></i>
                {item.duration}
              </p>

              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {item.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
