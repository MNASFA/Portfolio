import Card from "./card"
import SkillsToggle from "./SkillsToggle"

function Skills() {
  return (
    <div className="max-w-5/6 m-auto pb-3">
        <div className="about_title w-full p-8">
            <h2 className="w-fit m-auto text-5xl font-bold text-gray tracking-widest">Soft Skills</h2>
        </div>
        <div className="about_container w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
             <Card
                title="Time Management"
                description="Efficiently organizing tasks and prioritizing responsibilities to deliver projects on time without compromising quality."
                icon=" text-4xl fa-solid fa-clock"
            />

            <Card
                title="Creativity"
                description="Designing innovative web solutions and crafting unique user experiences that blend aesthetics with functionality."
                icon=" text-4xl fa-solid fa-palette"
            />

            <Card
                title="Adaptability"
                description="Quickly learning new technologies and adjusting to different work environments."
                icon=" text-4xl fa-solid fa-arrows-rotate"
            />

            <Card
                title="Team Collaboration"
                description="Working effectively with cross-functional teams, actively listening to colleagues, and contributing to shared goals in dynamic"
                icon=" text-4xl fa-solid fa-users"
            />

            <Card
                title="Clear Communication"
                description="Communicating effectively with clients and team members, ensuring accurate information exchange and understanding project requirements."
                icon=" text-4xl fa-solid fa-message"
            />

            <Card
                title="Problem Solving"
                description=" Analyzing challenges methodically and developing practical solutions through logical thinking and technical expertise."
                icon=" text-4xl fa-solid fa-puzzle-piece"
            />
        </div>

        {/* technical skills */}
        <div className="about_title w-full p-8 pt-15">
            <h2 className="w-fit m-auto text-5xl font-bold text-gray tracking-widest">Technical Skills</h2>
        </div>

        <div className="pb-20 pt-20 max-w-7xl mx-auto">
            <SkillsToggle />
        </div>
    </div>
    
  )
}

export default Skills