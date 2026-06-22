import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [internships, setInternships] = useState(0);
  const [projects, setProjects] = useState(0);
  const [certifications, setCertifications] = useState(0);

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Data Analyst", "Business Analytics MBA", "AI Enthusiast", "Problem Solver"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
      setTypingSpeed(isDeleting ? 40 : 80);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  useEffect(() => {
    // Animate to 4
    let intCount = 0;
    const intInterval = setInterval(() => {
      intCount++;
      setInternships(intCount);
      if (intCount >= 4) clearInterval(intInterval);
    }, 100);

    // Animate to 7
    let projCount = 0;
    const projInterval = setInterval(() => {
      projCount++;
      setProjects(projCount);
      if (projCount >= 7) clearInterval(projInterval);
    }, 80);

    // Animate to 6
    let certCount = 0;
    const certInterval = setInterval(() => {
      certCount++;
      setCertifications(certCount);
      if (certCount >= 6) clearInterval(certInterval);
    }, 90);

    return () => {
      clearInterval(intInterval);
      clearInterval(projInterval);
      clearInterval(certInterval);
    };
  }, []);

  return (
    <section id="home" className="hero">
  <div className="container">
    <div className="hero-wrap">

      
      <div className="hero-left rev left">
        <div className="hero-eyebrow">
          <span className="live-dot"></span> Open to Opportunities
        </div>
        <h1 className="hero-h1">
          Hello, I'm<br />
          <span className="line2">Aadish Kotadia</span>
        </h1>
        <div className="hero-role" id="typewriter">
          {text}<span style={{ borderRight: '2px solid #A855F7', animation: 'blink 1s step-end infinite' }}>&nbsp;</span>
        </div>
        <p className="hero-desc">
          Turning raw data into decisions that matter. Specialising in
          <strong>ML-powered insights</strong>, interactive <strong>Power BI dashboards</strong>,
          and <strong>AI analytics platforms</strong> that drive real business outcomes.
        </p>
        <div className="hero-stats">
          <div className="s-box"><span className="s-num">{internships}</span><span className="s-lbl">Internships</span></div>
          <div className="s-div"></div>
          <div className="s-box"><span className="s-num">{projects}</span><span className="s-lbl">Projects</span></div>
          <div className="s-div"></div>
          <div className="s-box"><span className="s-num">{certifications}</span><span className="s-lbl">Certifications</span></div>
        </div>
        <div className="hero-btns">
          <a href="#projects" className="btn btn-prime"><i className="fas fa-rocket"></i> View My Work</a>
          <a href="#contact"  className="btn btn-ghost"><i className="fas fa-paper-plane"></i> Get In Touch</a>
        </div>
        <div className="hero-socials">
          <a href="https://www.linkedin.com/in/aadish-kotadia-9a4957241/" target="_blank" rel="noopener" className="soc-btn" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/Aadish2003/" target="_blank" rel="noopener" className="soc-btn" aria-label="GitHub"><i className="fab fa-github"></i></a>
          <a href="mailto:kotadiaaadish1234@gmail.com" className="soc-btn" aria-label="Email"><i className="fas fa-envelope"></i></a>
          <a href="tel:+919737259929" className="soc-btn" aria-label="Phone"><i className="fas fa-phone"></i></a>
        </div>
      </div>

      
      <div className="hero-img-col rev right">
        <div className="hero-ring-wrap">
          <div className="ring-outer"></div>
          <div className="ring-mid"></div>
          <div className="hero-avatar-border">
            <img src="/aadish-profile.png" alt="Aadish Kotadia" className="hero-avatar" />
          </div>
          <div className="orb-dot od-1"></div>
          <div className="orb-dot od-2"></div>
          <div className="orb-dot od-3"></div>
        </div>
        <div className="f-card fc-ml"><i className="fas fa-brain"></i> Machine Learning</div>
        <div className="f-card fc-bi"><i className="fas fa-chart-bar"></i> Power BI</div>
        <div className="f-card fc-py"><i className="fab fa-python"></i> Python</div>
      </div>

    </div>
  </div>
  <a href="#about" className="scroll-cue">
    <div className="wheel"><div className="wheel-dot"></div></div>
    <span>Scroll</span>
  </a>
</section>
  );
};

export default Hero;
