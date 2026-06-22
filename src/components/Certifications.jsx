import React from 'react';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
  <div className="container">
    <div className="sh rev">
      <span className="sh-tag">Achievements</span>
      <h2>Certifications &amp; <span className="gt">Awards</span></h2>
      <p>Recognised by leading global organisations for excellence in data and analytics</p>
    </div>
    <div className="cert-grid">

      <div className="cert-card rev">
        <div className="cert-ico" style={{ background: 'linear-gradient(135deg,#00188F,#00BCF2)' }}><i className="fas fa-chart-network"></i></div>
        <div className="cert-body">
          <h4>McKinsey Forward Program</h4>
          <p>McKinsey &amp; Company</p>
          <span className="cert-yr">2025</span>
        </div>
      </div>

      <div className="cert-card rev">
        <div className="cert-ico" style={{ background: 'linear-gradient(135deg,#86BC25,#00A3E0)' }}><i className="fas fa-briefcase"></i></div>
        <div className="cert-body">
          <h4>Data Analytics Job Simulation</h4>
          <p>Deloitte Australia</p>
          <span className="cert-yr">2025</span>
        </div>
      </div>

      <div className="cert-card rev">
        <div className="cert-ico" style={{ background: 'linear-gradient(135deg,#4285F4,#34A853)' }}><i className="fab fa-google"></i></div>
        <div className="cert-body">
          <h4>Google Analytics Certification</h4>
          <p>Google</p>
          <span className="cert-yr">2025</span>
        </div>
      </div>

      <div className="cert-card rev">
        <div className="cert-ico" style={{ background: 'linear-gradient(135deg,#1F70C1,#00BCEB)' }}><i className="fas fa-network-wired"></i></div>
        <div className="cert-body">
          <h4>Introduction to Data Science</h4>
          <p>Cisco Networking Academy</p>
          <span className="cert-yr">2024</span>
        </div>
      </div>

      <div className="cert-card rev">
        <div className="cert-ico" style={{ background: 'linear-gradient(135deg,#054ADA,#BE95FF)' }}><i className="fab fa-python"></i></div>
        <div className="cert-body">
          <h4>Python for Data Science</h4>
          <p>IBM</p>
          <span className="cert-yr">2024</span>
        </div>
      </div>

      <div className="cert-card rev">
        <div className="cert-ico" style={{ background: 'linear-gradient(135deg,#003087,#E31837)' }}><i className="fas fa-trophy"></i></div>
        <div className="cert-body">
          <h4>Tata Imagination Challenge</h4>
          <p>Tata Group</p>
          <span className="cert-yr">2024</span>
        </div>
      </div>

    </div>
  </div>
</section>
  );
};

export default Certifications;
