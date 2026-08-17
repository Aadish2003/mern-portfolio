import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="experience">
  <div className="container">
    <div className="sh rev">
      <span className="sh-tag">Work History</span>
      <h2>Professional <span className="gt">Experience</span></h2>
      <p>Real-world impact across 4 internships in analytics, tech consulting, and business strategy</p>
    </div>

    <div className="tl">

      <div className="tl-row rev">
        <div className="tl-node"></div>
        <div className="tl-box gc">
          <div className="tl-hd">
            <div>
              <span className="current-pill" style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.4)', color: '#818cf8' }}>
                <span style={{ width: '6px', height: '6px', display: 'inline-block', borderRadius: '50%', background: '#818cf8', marginRight: '4px' }}></span>
                Completed
              </span>
              <h3>Business Analyst Intern</h3>
              <h4><i className="fas fa-building"></i> Evamp Technologies</h4>
            </div>
            <span className="tl-date"><i className="far fa-calendar-alt"></i> 2026 – July 2026</span>
          </div>
          <ul className="tl-pts">
            <li>Conducted market research and business analysis to support strategic decision-making across product and operations teams.</li>
            <li>Built data-driven reports and dashboards to track key performance indicators and business health metrics.</li>
            <li>Collaborated with cross-functional teams to translate complex business requirements into clear analytical frameworks and solutions.</li>
          </ul>
          <div className="tl-tags"><span>Business Analysis</span><span>Data Reporting</span><span>KPI Dashboards</span><span>Strategy</span><span>Market Research</span></div>
        </div>
      </div>

      <div className="tl-row rev">
        <div className="tl-node"></div>
        <div className="tl-box gc">
          <div className="tl-hd">
            <div>
              <h3>Data Analyst Intern</h3>
              <h4><i className="fas fa-building"></i> Ora Infotech Pvt Ltd</h4>
            </div>
            <span className="tl-date"><i className="far fa-calendar-alt"></i> Sept 2025 – Feb 2026</span>
          </div>
          <ul className="tl-pts">
            <li>Analysed business data using Power BI and Excel to design interactive dashboards and visualise KPIs for client reporting.</li>
            <li>Communicated directly with clients to understand requirements and deliver insight-driven analytical solutions.</li>
            <li>Automated reporting workflows and supported performance tracking to measurably enhance business efficiency.</li>
          </ul>
          <div className="tl-tags"><span>Power BI</span><span>Excel</span><span>Dashboard Design</span><span>Client Management</span><span>Data Analysis</span></div>
        </div>
      </div>

      <div className="tl-row rev">
        <div className="tl-node"></div>
        <div className="tl-box gc">
          <div className="tl-hd">
            <div>
              <h3>Tech Consultant Intern</h3>
              <h4><i className="fas fa-building"></i> Jubatsubai Labs Pvt. Ltd.</h4>
            </div>
            <span className="tl-date"><i className="far fa-calendar-alt"></i> Jan – June 2025</span>
          </div>
          <ul className="tl-pts">
            <li>Implemented GA4, Google Tag Manager, BigQuery, and MeasureMate for analytics tracking across Meta, LinkedIn, TikTok, X, and Snapchat.</li>
            <li>Automated email follow-up campaigns using Mailmeteor; managed lead segmentation and optimised end-to-end marketing workflows.</li>
            <li>Completed Google Analytics certification and built comprehensive marketing performance reports for clients.</li>
          </ul>
          <div className="tl-tags"><span>GA4</span><span>BigQuery</span><span>Tag Manager</span><span>Marketing Analytics</span><span>Mailmeteor</span></div>
        </div>
      </div>

      <div className="tl-row rev">
        <div className="tl-node"></div>
        <div className="tl-box gc">
          <div className="tl-hd">
            <div>
              <h3>Sales &amp; Marketing Intern</h3>
              <h4><i className="fas fa-building"></i> IMS Learning Resources Pvt. Ltd.</h4>
            </div>
            <span className="tl-date"><i className="far fa-calendar-alt"></i> Jan – Feb 2024</span>
          </div>
          <ul className="tl-pts">
            <li>Promoted the "Road to IIMCAT25" event across colleges through targeted presentations, registrations, and outreach campaigns.</li>
            <li>Enhanced communication, teamwork, and event marketing skills in a fast-paced B2C environment.</li>
          </ul>
          <div className="tl-tags"><span>Event Marketing</span><span>B2C Outreach</span><span>Presentations</span><span>Communication</span></div>
        </div>
      </div>

    </div>
  </div>
</section>
  );
};

export default Experience;
