import React from 'react';

const Footer = () => {
  return (
    <footer>
  <div className="container footer-in">
    <div className="f-logo">AK<span className="dot">.</span></div>
    <p>Crafted with <i className="fas fa-heart" style={{ color: '#EC4899' }}></i> by Aadish Kotadia &copy; 2026</p>
    <div className="f-soc">
      <a href="https://www.linkedin.com/in/aadish-kotadia-9a4957241/" target="_blank" rel="noopener"><i className="fab fa-linkedin-in"></i></a>
      <a href="https://github.com/Aadish2003/" target="_blank" rel="noopener"><i className="fab fa-github"></i></a>
      <a href="mailto:kotadiaaadish1234@gmail.com"><i className="fas fa-envelope"></i></a>
    </div>
  </div>
</footer>
  );
};

export default Footer;
