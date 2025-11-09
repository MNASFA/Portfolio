import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Journey from "./components/Journey"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

import { useEffect, useRef, useState } from 'react';

function ScrollAnimation({ children, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Updates both entering AND exiting
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
}



function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="text-gray">
      <ScrollAnimation>
        <Navbar />
      </ScrollAnimation>
      <ScrollAnimation>
        <Hero />
      </ScrollAnimation>
      <ScrollAnimation>
         <About />
      </ScrollAnimation>
      <ScrollAnimation>
        <Skills />
      </ScrollAnimation>
      <ScrollAnimation>
        <Journey />
      </ScrollAnimation>
      <ScrollAnimation>
        <Projects />
      </ScrollAnimation>
      <ScrollAnimation>
        <Contact />
      </ScrollAnimation>
      <ScrollAnimation>
        <Footer />
      </ScrollAnimation>
    </div>
  )
}

export default App
