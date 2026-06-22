import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
  <div className="container">
    <div className="sh rev">
      <span className="sh-tag">Who I Am</span>
      <h2 className="section-title">About <span className="gt">Me</span></h2>
    </div>
    <div className="about-grid">
      <div className="about-text rev left">
        <p>I'm a passionate <strong>Data Analyst</strong> and Business Analytics postgraduate at <strong>SVNIT (NIT Surat)</strong>, driven by the belief that data is the most powerful resource of our time. My engineering background in ICT from <strong>Adani University</strong> gives me a rare ability to bridge technology and business strategy.</p>
        <p>I thrive building <strong>end-to-end data pipelines</strong> — from raw data collection to predictive modelling and interactive dashboards that executive teams actually use. I've worked across tech consulting, data analytics, and marketing analytics.</p>
        <p>Currently a <strong>Business Analyst Intern at Evamp Technologies</strong>, I'm passionate about AI's impact on the workforce and always exploring new ML frameworks.</p>
        <div className="info-grid">
          <div className="i-item"><i className="fas fa-envelope"></i><span>kotadiaaadish1234@gmail.com</span></div>
          <div className="i-item"><i className="fas fa-phone"></i><span>+91 9737259929</span></div>
          <div className="i-item"><i className="fas fa-map-marker-alt"></i><span>Surat, Gujarat, India</span></div>
          <div className="i-item"><i className="fas fa-graduation-cap"></i><span>MBA, SVNIT · 2025–2027</span></div>
        </div>
      </div>
      <div className="edu-box gc rev right">
        <h3><i className="fas fa-graduation-cap"></i> Education</h3>
        <div className="edu-item">
          <div className="edu-icon"><i className="fas fa-university"></i></div>
          <div>
            <h4>MBA — Business Analytics</h4>
            <p>Sardar Vallabhbhai National Institute of Technology (SVNIT)</p>
            <span className="chip">2025 – 2027</span>
          </div>
        </div>
        <div className="edu-item">
          <div className="edu-icon"><i className="fas fa-microchip"></i></div>
          <div>
            <h4>B.E. — Information &amp; Communication Technology</h4>
            <p>Adani University, Ahmedabad</p>
            <span className="chip">2021 – 2025 · CGPA 7.80</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default About;
