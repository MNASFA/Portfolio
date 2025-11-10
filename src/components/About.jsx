import about_img from "../assets/about.svg"

function About() {
  return (
    <div id="about" className="block max-w-5/6 m-auto min-h-screen pt-8 sm:pt-18 pb-8 sm:pb-12 px-4 sm:px-6">
        <div className="about_title w-full p-4 sm:p-8">
            <h2 className="w-fit m-auto text-2xl sm:text-4xl md:text-5xl font-bold text-gray tracking-widest">About Me</h2>
        </div>
        <div className="about_container flex flex-col lg:flex-row items-center justify-around w-full pt-8 sm:pt-12 md:pt-16 lg:pt-20 gap-8 lg:gap-0">
             <div className="image flex items-center justify-center w-full lg:w-1/2 pb-4 lg:pb-8 order-2 lg:order-1">
                <img src={about_img} alt="about image" className="w-full max-w-md lg:max-w-none lg:w-5/6 rounded-2xl" />
            </div>
            <div className="content w-full lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
                <h3 className="pb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-orange-600 font-bold">"Click. Code. Create."</h3>
                <p className="pb-4 text-base sm:text-lg md:text-xl lg:text-2xl">
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
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-center lg:justify-start">
                  <button className="talk bg-orange-600 font-bold rounded-2xl hover:bg-white/87 hover:text-orange-600 py-2 sm:py-3 px-6 sm:px-8 text-sm sm:text-base" onClick={() => window.location.href = "#contact"} >Let's talk <i class="fa-solid fa-comments"></i></button>
                  <button className="cv bg-white/87 font-bold text-orange-600 rounded-2xl hover:bg-orange-600 hover:text-white/87 py-2 sm:py-3 px-6 sm:px-8 text-sm sm:text-base sm:ml-4" onClick={() => window.open('https://drive.google.com/file/d/1wSslh_4Y7JxzS4nQx6Y_IRl5OoYOr4Jo/view?usp=sharing', '_blank')} >Download CV <i class="fa-solid fa-download"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
