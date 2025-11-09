import ProjectCard from "./ProjectCard"
import cub3d from "../assets/cub3d.jpg"
import minishell from "../assets/minishell.jpg"
import net from "../assets/netpractice.jpg"
import anajah from "../assets/anajah.jpg"
import rumble from "../assets/rumble.jpg"
import hostel from "../assets/hostel.jpg"

function Projects() {
  return (
     <div id="projects" className="max-w-5/6 m-auto pb-12 pt-8 sm:pb-16 lg:pb-20 px-4 sm:px-6">
        <div className="about_title w-full p-4 sm:p-8 mb-10 sm:mb-16 lg:mb-20 mt-10 sm:mt-16 lg:mt-20">
            <h2 className="w-fit m-auto text-3xl sm:text-4xl md:text-5xl font-bold text-gray tracking-widest">Projects</h2>
        </div>
        <div className="about_container w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12 lg:gap-16 xl:gap-20">
             <ProjectCard title="Cub3d" link="Repo" url={cub3d} flag1="#C" flag2="#RayCasting" flag3="#MinilibX"
                des="Working on cub3D taught me invaluable lessons about graphics programming, from understanding ray-casting 
                algorithms and texture mapping to implementing efficient rendering pipelines and handling real-time user 
                interactions. I learned how to parse complex file formats and validate map configurations."
             />
             <ProjectCard title="Minishell" link="Repo" url={minishell} flag1="#C" flag2="#Linux" flag3="#Bash"
                des="This project was one of the most challenging yet indulging projects of the 42 curriculum that
                 I have faced so far, when you have to deal with many test cases and when you get to learn many things,
                  from software architecture, system calls, file descriptors… to team coordination, management, and work
                   distribution."
             />
             <ProjectCard title="Net Practice" link="Repo" url={net} flag1="#IP Adress" flag2="#OSI Model" flag3="#Subnetting"
                des="A hands-on networking project focused on configuring and troubleshooting complex multi-subnet network 
                topologies with proper routing protocols to ensure bidirectional communication between hosts, routers, 
                and the Internet."
             />
             <ProjectCard title="Anajah Academy" link="Demo" url={anajah} flag1="#HTML" flag2="#CSS" flag3="#JS"
                des="Anajah Academy: My debut freelance project, a dynamic landing page crafted with HTML, CSS, JS, 
                and PHP, showcasing my skills in web development."
             />
             <ProjectCard title="Rumble Cars" link="Demo" url={rumble} flag1="#React.js" flag2="#CSS" flag3="#BootsTrap"
                des="Rumble: My multifaceted project from the first internship, featuring multiple React.js and 
                Bootstrap-powered pages, highlighting adeptness in dynamic web development."
             />
             <ProjectCard title="Hostel Management System" link="Repo" url={hostel} flag1="C#" flag2="#SQL Server" flag3="#CRUD" 
                des="My PFE endeavor exemplifies database-driven efficiency, leveraging C# (.NET) for CRUD 
                operations and SQL Server for seamless data management, ensuring streamlined hostel administration."
             />
        </div>
    </div>
  )
}

export default Projects
