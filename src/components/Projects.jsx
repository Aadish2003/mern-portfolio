import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects">
  <div className="container">
    <div className="sh rev">
      <span className="sh-tag">My Work</span>
      <h2>Featured <span className="gt">Projects</span></h2>
      <p>A showcase of data-driven solutions, AI platforms, and analytical dashboards</p>
    </div>

    <div className="proj-grid">

      <div className="pj rev">
        <div className="pj-img">
          <span className="pj-cat"><i className="fas fa-star" style={{ color: '#F59E0B' }}></i> Featured</span>
          <img src="/media/ai_workforce.png" alt="AI Workforce Risk Analytics" />
          <div className="pj-cover">
            <a href="https://github.com/Aadish2003/AI-Risk-Workforce-Analytics" target="_blank" rel="noopener" className="pj-open"><i className="fas fa-external-link-alt"></i> View Project</a>
          </div>
        </div>
        <div className="pj-body">
          <div className="pj-tags"><span className="t-py">Python</span><span className="t-sl">Streamlit</span><span>Scikit-learn</span><span>Plotly</span><span>ML</span></div>
          <h3>AI Workforce Risk Analytics Platform</h3>
          <p>End-to-end ML platform analysing AI's impact on jobs and salaries. Custom risk scoring engine built on skill gap, AI adoption rate, and remote feasibility. 7-tab interactive Streamlit dashboard with real-time predictions and industry-wise analysis.</p>
          <div className="pj-footer">
            <span><i className="fas fa-code-branch"></i> ML · Streamlit</span>
            <a href="https://github.com/Aadish2003/AI-Risk-Workforce-Analytics" target="_blank" rel="noopener"><i className="fab fa-github"></i> GitHub <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>

      <div className="pj rev">
        <div className="pj-img">
          <span className="pj-cat"><i className="fas fa-eye" style={{ color: '#06B6D4' }}></i> Computer Vision</span>
          <img src="/media/ev_detection.png" alt="EV Number Plate Detection" />
          <div className="pj-cover">
            <a href="https://github.com/Aadish2003/" target="_blank" rel="noopener" className="pj-open"><i className="fas fa-external-link-alt"></i> View Project</a>
          </div>
        </div>
        <div className="pj-body">
          <div className="pj-tags"><span className="t-cv">YOLOv8</span><span>OpenCV</span><span>EasyOCR</span><span>Tesseract</span><span>Flask</span></div>
          <h3>EV Number Plate Detection System</h3>
          <p>Live 1080p video pipeline using YOLOv8 for vehicle detection with EasyOCR / Tesseract for green EV plate recognition. HSV colour mask fallback achieves 98%+ detection confidence. Runs on GPU with real-time processing.</p>
          <div className="pj-footer">
            <span><i className="fas fa-microchip"></i> AI · Vision</span>
            <a href="https://github.com/Aadish2003/" target="_blank" rel="noopener"><i className="fab fa-github"></i> GitHub <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>

      <div className="pj rev">
        <div className="pj-img">
          <span className="pj-cat"><i className="fas fa-chart-bar" style={{ color: '#F59E0B' }}></i> Power BI</span>
          <img src="/media/nestle_dashboard.png" alt="Nestle Financial Dashboard" />
          <div className="pj-cover">
            <a href="https://github.com/Aadish2003/Nestle-Dashboard" target="_blank" rel="noopener" className="pj-open"><i className="fas fa-external-link-alt"></i> View Project</a>
          </div>
        </div>
        <div className="pj-body">
          <div className="pj-tags"><span className="t-bi">Power BI</span><span>DAX</span><span>Financial Analysis</span><span>Data Modelling</span></div>
          <h3>Nestlé Financial Analysis Dashboard</h3>
          <p>Comprehensive Power BI dashboard covering total sales, net profit, EBITDA, ratio analysis, risk assessment, and valuation metrics for Nestlé India. Enables stakeholders to track financial health and support data-driven decisions.</p>
          <div className="pj-footer">
            <span><i className="fas fa-rupee-sign"></i> Finance · BI</span>
            <a href="https://github.com/Aadish2003/Nestle-Dashboard" target="_blank" rel="noopener"><i className="fab fa-github"></i> GitHub <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>

      <div className="pj rev">
        <div className="pj-img">
          <span className="pj-cat"><i className="fas fa-globe" style={{ color: '#10B981' }}></i> Live App</span>
          <img src="/media/mobilane_dashboard.png" alt="Mobilane Campaign Analysis" />
          <div className="pj-cover">
            <a href="https://spark-mobilane-dash.lovable.app" target="_blank" rel="noopener" className="pj-open"><i className="fas fa-external-link-alt"></i> Live Demo</a>
          </div>
        </div>
        <div className="pj-body">
          <div className="pj-tags"><span className="t-bi">Power BI</span><span>Campaign Analytics</span><span>Excel</span><span>Marketing</span></div>
          <h3>Mobilane Campaign Analytics Dashboard</h3>
          <p>Customer and campaign analytics dashboard built during internship at Ora Infotech. Visualises marketing funnel, conversion rates, and campaign ROI across channels. Executive-ready reporting with interactive slicers and drill-throughs.</p>
          <div className="pj-footer">
            <span><i className="fas fa-broadcast-tower"></i> Marketing · BI</span>
            <a href="https://spark-mobilane-dash.lovable.app" target="_blank" rel="noopener"><i className="fas fa-arrow-up-right-from-square"></i> Live App <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>

      <div className="pj rev">
        <div className="pj-img">
          <span className="pj-cat"><i className="fas fa-chart-bar" style={{ color: '#F59E0B' }}></i> Power BI</span>
          <img src="/media/hul_dashboard.png" alt="HUL Financial Analysis" />
          <div className="pj-cover">
            <a href="https://github.com/Aadish2003/HUL-Financial-Analysis-Report" target="_blank" rel="noopener" className="pj-open"><i className="fas fa-external-link-alt"></i> View Project</a>
          </div>
        </div>
        <div className="pj-body">
          <div className="pj-tags"><span className="t-bi">Power BI</span><span>Financial Modelling</span><span>Ratio Analysis</span><span>DAX</span></div>
          <h3>HUL Financial Analysis Report</h3>
          <p>Deep financial analysis of Hindustan Unilever Limited: 5-year revenue trends, segment-wise performance breakdown (Home Care, Beauty, Foods), geographic sales distribution across India, valuation multiples, and risk assessment.</p>
          <div className="pj-footer">
            <span><i className="fas fa-chart-line"></i> Finance · Analytics</span>
            <a href="https://github.com/Aadish2003/HUL-Financial-Analysis-Report" target="_blank" rel="noopener"><i className="fab fa-github"></i> GitHub <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>

      <div className="pj rev">
        <div className="pj-img">
          <span className="pj-cat"><i className="fas fa-rocket" style={{ color: '#A855F7' }}></i> Web App</span>
          <img src="/media/space_tourism.png" alt="Space Tourism Website" />
          <div className="pj-cover">
            <a href="https://github.com/Aadish2003/nasa-spaceapp" target="_blank" rel="noopener" className="pj-open"><i className="fas fa-external-link-alt"></i> View Project</a>
          </div>
        </div>
        <div className="pj-body">
          <div className="pj-tags"><span>Flask</span><span>MySQL</span><span>Python</span><span>HTML/CSS/JS</span></div>
          <h3>Planetary Tourism Office — Space Website</h3>
          <p>Full-stack Flask web application for the NASA Space Apps Challenge. Showcases hotels, hospitals, and activities across planets with air composition, oxygen levels, and travel resources. Interactive UI for exploring the solar system.</p>
          <div className="pj-footer">
            <span><i className="fas fa-satellite"></i> NASA SpaceApps</span>
            <a href="https://github.com/Aadish2003/nasa-spaceapp" target="_blank" rel="noopener"><i className="fab fa-github"></i> GitHub <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>

      <div className="pj rev">
        <div className="pj-img">
          <span className="pj-cat"><i className="fas fa-flask" style={{ color: '#10B981' }}></i> Data Science</span>
          <img src="/media/titanic_report.png" alt="Titanic Data Analysis" />
          <div className="pj-cover">
            <span className="pj-open"><i className="fas fa-chart-area"></i> EDA Report</span>
          </div>
        </div>
        <div className="pj-body">
          <div className="pj-tags"><span>Pandas</span><span>EDA</span><span>yData Profiling</span><span>Matplotlib</span><span>Seaborn</span></div>
          <h3>Titanic Survival — Exploratory Data Analysis</h3>
          <p>Comprehensive EDA on the Titanic dataset: survival patterns by passenger class, age, gender, and embarkation. Automated profiling report with correlation matrices, distributions, and missing value analysis using yData Profiling.</p>
          <div className="pj-footer">
            <span><i className="fas fa-ship"></i> EDA · Profiling</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
  );
};

export default Projects;
