
function Card({title, description, icon, link}) {
  return (
    <div class=" card relative flex flex-col my-4 sm:my-6 shadow-sm w-full m-auto rounded-2xl p-4 sm:p-6 bg-orange-600 hover:bg-neutral-950 hover:text-orange-600">
        <div class="flex items-center mb-3 sm:mb-5">
            <i class={icon}></i>
            <h5 class="ml-3 text-xl sm:text-2xl md:text-3xl font-bold mt-2">
            {title}
            </h5>
        </div>
        <p class="block leading-normal text-sm sm:text-base md:text-lg lg:text-xl font-light pl-0 sm:pl-4 mb-3 sm:mb-5">
            {description}
        </p>
        <div className='pl-0 sm:pl-4'>
            <a href="#contact" class="font-semibold text-xs sm:text-sm hover:underline flex items-center">
            Let's Talk
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            </a>
        </div>
    </div>
  )
}

export default Card
