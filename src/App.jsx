import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Journey from "./components/Journey"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ScrollToTop from "react-scroll-to-top"
import { Routes, Route, useLocation } from "react-router-dom"
import Success from "./components/Success"

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

function MainContent() {
    return (
        <>
            <ScrollAnimation><Hero /></ScrollAnimation>
            <ScrollAnimation><About /></ScrollAnimation>
            <ScrollAnimation><Skills /></ScrollAnimation>
            <ScrollAnimation><Journey /></ScrollAnimation>
            <ScrollAnimation><Projects /></ScrollAnimation>
            <ScrollAnimation><Contact /></ScrollAnimation>
            {/* The Contact component now handles the /success redirect */}
        </>
    )
}

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === "/success";

  return (
    <div className="text-gray">
      {/* 1. Navbar shown on every page except success */}
      {!hideLayout && (
        <ScrollAnimation>
          <Navbar />
        </ScrollAnimation>
      )}

      {/* 2. Routes define page content based on URL */}
      <Routes>
        {/* Route for the main portfolio (path is '/') */}
        <Route path="/" element={<MainContent />} />
        
        {/* 👈 Route for the success page (path is '/success') */}
        <Route path="/success" element={<Success />} />

      </Routes>

      {/* 3. Footer and ScrollToTop hidden on success */}
      {!hideLayout && (
        <ScrollAnimation>
          <Footer />
        </ScrollAnimation>
      )}
      <ScrollToTop smooth className="scroll_top" color="#ffffff" />
    </div>
  )
}

export default App
