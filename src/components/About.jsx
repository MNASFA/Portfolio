import about_img from "../assets/about.svg"

function About() {
  return (
    <div className="block max-w-5/6 m-auto h-screen pt-12 pb-12">
        <div className="about_title w-full p-8">
            <h2 className="w-fit m-auto text-5xl font-bold text-gray tracking-widest">About Me</h2>
        </div>
        <div className="about_container flex items-center justify-around w-full pt-20">
             <div className="image flex items-center justify-center w-1/2 pb-8">
                <img src={about_img} alt="about image" className="w-5/6 rounded-2xl" />
            </div>
            <div className="content w-1/2">
                <h3 className="pb-4 text-6xl text-orange-600 font-bold">"Click. Code. Create."</h3>
                <p className="pb-4 text-2xl">
                    I'm Houssam, a passionate 23-year-old front-end developer hailing from the vibrant city of Casablanca, 
                    Morocco. As a budding freelancer, I'm on a mission to craft engaging and user-friendly 
                    digital experiences. Whether it's designing sleek interfaces or coding dynamic websites.
                    <br /><br />
                    My journey into web development started with curiosity 
                    and grew into a passion for creating digital solutions 
                    that make a difference. I specialize in transforming 
                    ideas into clean, responsive interfaces using the 
                    latest technologies. Every project is an opportunity 
                    to learn, grow, and deliver something exceptional.
                    I don't just write code—I craft experiences.
                </p>
                <button className="talk bg-orange-600 font-bold rounded-2xl hover:bg-white/87 hover:text-orange-600">Let's talk <i class="fa-solid fa-comments"></i></button>
                <button className="cv bg-white/87 font-bold text-orange-600 rounded-2xl hover:bg-orange-600 hover:text-white/87">Download CV <i class="fa-solid fa-download"></i></button>
            </div>
        </div>
    </div>
  )
}

export default About
