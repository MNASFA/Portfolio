import ProjectCard from "./ProjectCard"
import cub3d from "../assets/cub3d.jpg"
import minishell from "../assets/minishell.jpg"
import net from "../assets/netpractice.jpg"
import anajah from "../assets/anajah.jpg"
import rumble from "../assets/rumble.jpg"
import hostel from "../assets/hostel.jpg"

function Projects() {
  return (
     <div className="max-w-5/6 m-auto pb-20">
        <div className="about_title w-full p-8 mb-20 mt-20">
            <h2 className="w-fit m-auto text-5xl font-bold text-gray tracking-widest">Projects</h2>
        </div>
        <div className="about_container w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
             <ProjectCard url={cub3d}/>
             <ProjectCard url={minishell}/>
             <ProjectCard url={net}/>
             <ProjectCard url={anajah}/>
             <ProjectCard url={rumble}/>
             <ProjectCard url={hostel}/>
        </div>
    </div>
  )
}

export default Projects
