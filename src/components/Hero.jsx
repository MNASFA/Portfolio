
import heropic from "../assets/Learning-cuate.svg"

function Hero() {
  return (
    <div className='hero w-full px-10'>
      <div className='two_sides max-w-5/6 mx-auto flex items-center justify-between'>
        <div className="side_one w-2/3">

          <h4 className="text-2xl pb-5 tracking-wider ml-1">Full Stack Developer</h4>

          <h4 className="text-7xl pb-2 tracking-wider font-bold">Hello I'm</h4>
          <h4 className="text-7xl pb-4 tracking-wider font-bold text-orange-600">Houssam Mnasfa</h4>
          <p className="text-2xl pb-10 ml-1">
            Full-stack developer and student at 1337 Khouribga, passionate 
            about crafting clean code and building innovative 
            web solutions. With a diploma in software development, 
            I transform ideas into functional, 
            user-friendly applications.</p>

          <div className="buttons pb-10 flex items-center">
            <button className="ml-1 border-3 rounded-4xl py-3 px-9 border-orange-600 text-orange-600 uppercase">Download cv <i class="fa-solid fa-download"></i></button>
            <a href="#" className="w-fit" ><i class=" text-orange-600 ml-6 text-4xl fa-brands fa-github"></i></a>
            <a href="#" className="w-fit" ><i class=" text-orange-600 ml-3 text-4xl fa-brands fa-linkedin"></i></a>
            <a href="#" className="w-fit" ><i class=" text-orange-600 ml-3 text-4xl fa-brands fa-discord"></i></a>
            <a href="#" className="w-fit" ><i class=" text-orange-600 ml-3 text-4xl fa-brands fa-instagram"></i></a>
          </div>
        </div>

        <div className="side_two w-3/5">
            <img src={heropic} alt="hero pic"/>
        </div>
      </div>

      <div className="notice max-w-5/6 mx-auto w-full flex items-center justify-between">
        <div className="flex items-center mr-3">
          <h4 className="text-8xl text-orange-600 mr-3">+8</h4>
          <strong className="text-2xl">Hours of coding<br />per day</strong>
        </div>
         <div className="flex items-center mr-3">
          <h4 className="text-8xl text-orange-600 mr-3">+10</h4>
          <strong className="text-2xl">Projects<br />completed</strong>
        </div>
         <div className="flex items-center mr-3">
          <h4 className="text-8xl text-orange-600 mr-3">+5</h4>
          <strong className="text-2xl">Technologies<br />Mastered</strong>
        </div>
         <div className="flex items-center mr-3">
          <h4 className="text-8xl text-orange-600 mr-3">1337</h4>
          <strong className="text-2xl">Current<br />focus</strong>
        </div>
      </div>
    </div>
  )
}

export default Hero
