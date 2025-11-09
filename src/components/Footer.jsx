import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-neutral-950 to-neutral-900">
      <div className="max-w-[80%] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="logo text-4xl sm:text-6xl mb-4">
              Hm<span className="font-bold text-orange-600">.</span>
            </h3>
            <p className="text-gray-400 text-sm sm:text-lg mb-4 leading-relaxed">
              Full-stack developer passionate about crafting clean code and building innovative web solutions.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-orange-600/20 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github text-orange-600 group-hover:text-white transition-colors duration-300"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-orange-600/20 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin text-orange-600 group-hover:text-white transition-colors duration-300"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-orange-600/20 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Discord"
              >
                <i className="fa-brands fa-discord text-orange-600 group-hover:text-white transition-colors duration-300"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-orange-600/20 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram text-orange-600 group-hover:text-white transition-colors duration-300"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-gray-300 font-bold text-lg sm:text-2xl mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#hero" 
                  className="text-gray-400 hover:text-orange-600 text-sm sm:text-xl transition-colors duration-300 inline-flex items-center group"
                >
                  <i className="fa-solid fa-chevron-right text-xs mr-2 text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-orange-600 text-sm sm:text-xl transition-colors duration-300 inline-flex items-center group"
                >
                  <i className="fa-solid fa-chevron-right text-xs mr-2 text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-400 hover:text-orange-600 text-sm sm:text-xl transition-colors duration-300 inline-flex items-center group"
                >
                  <i className="fa-solid fa-chevron-right text-xs mr-2 text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-orange-600 text-sm sm:text-xl transition-colors duration-300 inline-flex items-center group"
                >
                  <i className="fa-solid fa-chevron-right text-xs mr-2 text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-gray-300 font-bold text-lg sm:text-2xl mb-4 sm:mb-6">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start">
                <i className="fa-solid fa-envelope text-orange-600 mr-3 text-sm"></i>
                <a 
                  href="mailto:hmnasfa@example.com" 
                  className="text-gray-400 hover:text-orange-600 text-sm sm:text-xl transition-colors duration-300"
                >
                  houssammnasfa2@gmail.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <i className="fa-solid fa-phone text-orange-600 mr-3 text-sm"></i>
                <a 
                  href="tel:+212600000000" 
                  className="text-gray-400 hover:text-orange-600 text-sm sm:text-xl transition-colors duration-300"
                >
                  +212 623 581 831
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <i className="fa-solid fa-location-dot text-orange-600 mr-3 text-sm"></i>
                <span className="text-gray-400 text-sm sm:text-xl">
                  Casablanca, Morocco
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-600/20 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
              © {currentYear} <span className="text-orange-600 font-semibold">Houssam Mnasfa</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <i className="fa-solid fa-heart text-orange-600 animate-pulse"></i>
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
