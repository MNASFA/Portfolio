
import React from 'react';
import Item from './Item';

export default function MyJourney() {
  const item = [
    {
        edu_title: "1337 Khouribga",
        edu_duration: "Oct 2024 - Present",
        edu_description: `I’m currently studying at 1337 Khouribga, an innovative coding school that follows the 42 Network’s peer-to-peer learning model.
        Through real-world projects, I’m building strong skills in algorithms, C programming, Unix systems, and software development.`,
        exp_title: "Anajah Academy | Projet Freelance",
        exp_duration: "Juin 2023 – Juillet 2023",
        exp_description: "Create a static website for an educational agency specializing in educational consulting in Türkiye."
    },
    {
        edu_title: "ISTA Hay Hassani 1",
        edu_duration: "September 2020 - July 2022",
        edu_description: `I earned my specialized technician diploma in computer development, where I learned the fundamentals of programming, databases,
        and web technologies.
        This experience gave me a solid technical base before joining 1337.`,
        exp_title: "Web Agency | Web Developer",
        exp_duration: "Février 2023 – Mai 2023 | Internship",
        exp_description: `- Editing a complete project (HTML, CSS, Bootstrap).
        - Creating a website (React js, Bootstrap).
        - Creating databases with SQL queries (MySql)`
    },
    {
        edu_title: "Mohamed Zerktouni High School",
        edu_duration: "2019",
        edu_description: `I completed my baccalaureate in physical sciences, which helped me develop analytical thinking and problem-solving skills that I still apply in my coding journey today.`,
        exp_title: "Nicest Trans | Developer Assistant",
        exp_duration: "Mars 2022 – Avril 2022 | Internship",
        exp_description: `- Creation of Desktop Applications (.Net, C#).
        - Creation of Databases (Sql Server).`
    }
  ];


  return (
    <section className="min-h-screen py-6 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="about_title w-full p-8">
            <h2 className="w-fit m-auto text-5xl font-bold text-gray tracking-widest mb-8">My Journey</h2>
            {/* <p className="text-gray/87 text-center text-3xl">
                My academic background and professional experience
            </p> */}
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 rounded-2xl w-1 bg-orange-600 transform -translate-x-1/2"></div>
            {/* Timeline Items */}
            <div className='space-y-8'>
                {item.map((entry, index) => (
                    <Item
                        key = {index}
                        edu_title = {entry.edu_title}
                        edu_duration = {entry.edu_duration}
                        edu_description = {entry.edu_description}
                        exp_title = {entry.exp_title}
                        exp_duration = {entry.exp_duration}
                        exp_description = {entry.exp_description}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}