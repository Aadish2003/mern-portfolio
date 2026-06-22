import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
  <div className="container">
    <div className="sh rev">
      <span className="sh-tag">Let's Connect</span>
      <h2>Get In <span className="gt">Touch</span></h2>
      <p>Open to full-time roles, internships, and freelance analytics projects</p>
    </div>
    <div className="contact-grid">

      <div className="contact-intro rev left">
        <p>I'm always open to discussing <strong>data analyst roles, business intelligence projects,</strong> and <strong>ML collaborations</strong>. Whether you have a question or just want to say hi — my inbox is always open!</p>
        <div className="c-cards">
          <a href="mailto:kotadiaaadish1234@gmail.com" className="c-card">
            <div className="c-ico"><i className="fas fa-envelope"></i></div>
            <div><span>Email</span><p>kotadiaaadish1234@gmail.com</p></div>
          </a>
          <a href="tel:+919737259929" className="c-card">
            <div className="c-ico"><i className="fas fa-phone"></i></div>
            <div><span>Phone</span><p>+91 9737259929</p></div>
          </a>
          <a href="https://www.linkedin.com/in/aadish-kotadia-9a4957241/" target="_blank" rel="noopener" className="c-card">
            <div className="c-ico"><i className="fab fa-linkedin-in"></i></div>
            <div><span>LinkedIn</span><p>Aadish Kotadia</p></div>
          </a>
          <a href="https://github.com/Aadish2003/" target="_blank" rel="noopener" className="c-card">
            <div className="c-ico"><i className="fab fa-github"></i></div>
            <div><span>GitHub</span><p>Aadish2003</p></div>
          </a>
        </div>
      </div>

      <div className="contact-form-wrap gc rev right">
        <h3>Send a <span className="gt">Message</span></h3>
        <form className="form" id="contactForm" onSubmit={handleSubmit}>
          <div className="f-row">
            <div className="f-grp">
              <label>Your Name</label>
              <input type="text" id="fn" placeholder="John Doe" required />
            </div>
            <div className="f-grp">
              <label>Email</label>
              <input type="email" id="fe" placeholder="you@example.com" required />
            </div>
          </div>
          <div className="f-grp">
            <label>Subject</label>
            <input type="text" id="fs" placeholder="Job Opportunity / Collaboration / Query" />
          </div>
          <div className="f-grp">
            <label>Message</label>
            <textarea id="fm" rows="5" placeholder="Tell me about your project or opportunity..." required></textarea>
          </div>
          <button type="submit" className="btn btn-prime btn-full"><i className="fas fa-paper-plane"></i> Send Message</button>
        </form>
      </div>

    </div>
  </div>
</section>
  );
};

export default Contact;
