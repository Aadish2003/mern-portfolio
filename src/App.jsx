import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Give React a moment to mount the DOM
    setTimeout(() => {
      document.querySelectorAll('.rev').forEach(el => observer.observe(el));
      
      // Initial hero reveal
      document.querySelectorAll('.hero .rev').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 150);
      });
    }, 100);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <canvas id="particle-canvas"></canvas>
      <div className="bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      <div className="mesh-bg"></div>
      <div className="toast-notif" id="toast"></div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <AIAssistant />
      <Footer />
    </>
  );
}

export default App;