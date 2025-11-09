
import heropic from "../assets/Learning-cuate.svg"

function Hero() {
  return (
    <div className=' block hero w-full px-4 sm:px-6 md:px-8 lg:px-10'>
      <div className='two_sides max-w-5/6 mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0'>
        <div className="side_one w-full lg:w-2/3 text-center lg:text-left">

          <h3 className="text-lg sm:text-xl md:text-2xl pb-3 sm:pb-5 tracking-wider ml-0 lg:ml-1 uppercase">Full Stack Developer</h3>

          <h4 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl pb-2 tracking-wider font-bold uppercase">Hello I'm</h4>
          <h4 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl pb-4 tracking-wider font-bold text-orange-600 uppercase">Houssam Mnasfa</h4>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl pb-6 sm:pb-8 lg:pb-10 ml-0 lg:ml-1">
            Full-stack developer and student at 1337 Khouribga, passionate 
            about crafting clean code and building innovative 
            web solutions. With a diploma in software development, 
            I transform ideas into functional, 
            user-friendly applications.
            </p>

          <div className="buttons pb-6 sm:pb-8 lg:pb-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-0">
            <button className="w-full sm:w-auto ml-0 lg:ml-1 border-3 rounded-4xl py-2 sm:py-3 px-6 sm:px-9 border-orange-600 text-orange-600 text-sm sm:text-base uppercase">Download cv <i class="fa-solid fa-download"></i></button>
            <div className="flex items-center gap-3 sm:gap-4">
              <a href="#" className="w-fit"><i class=" text-orange-600 ml-0 sm:ml-6 text-2xl sm:text-3xl lg:text-4xl fa-brands fa-github"></i></a>
              <a href="#" className="w-fit"><i class=" text-orange-600 ml-0 sm:ml-3 text-2xl sm:text-3xl lg:text-4xl fa-brands fa-linkedin"></i></a>
              <a href="#" className="w-fit"><i class=" text-orange-600 ml-0 sm:ml-3 text-2xl sm:text-3xl lg:text-4xl fa-brands fa-discord"></i></a>
              <a href="#" className="w-fit"><i class=" text-orange-600 ml-0 sm:ml-3 text-2xl sm:text-3xl lg:text-4xl fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>

        <div className="side_two w-full lg:w-3/5 flex justify-center">
            <img src={heropic} alt="hero pic" className="w-full max-w-md lg:max-w-none"/>
        </div>
      </div>

      <div className="notice max-w-5/6 mx-auto w-full hidden lg:flex items-center justify-between">
        <div className="flex items-center mr-3">
          <h4 className="text-6xl xl:text-8xl text-orange-600 mr-3">+8</h4>
          <strong className="text-xl xl:text-2xl">Hours of coding<br />per day</strong>
        </div>
         <div className="flex items-center mr-3">
          <h4 className="text-6xl xl:text-8xl text-orange-600 mr-3">+10</h4>
          <strong className="text-xl xl:text-2xl">Projects<br />completed</strong>
        </div>
         <div className="flex items-center mr-3">
          <h4 className="text-6xl xl:text-8xl text-orange-600 mr-3">+5</h4>
          <strong className="text-xl xl:text-2xl">Technologies<br />Mastered</strong>
        </div>
         <div className="flex items-center mr-3">
          <h4 className="text-6xl xl:text-8xl text-orange-600 mr-3">1337</h4>
          <strong className="text-xl xl:text-2xl">Current<br />focus</strong>
        </div>
      </div>
    </div>
  )
}

export default Hero
