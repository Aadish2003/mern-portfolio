import React, { useState, useEffect, useRef } from 'react';
import { Play, Square } from 'lucide-react';

const AIAssistant = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentText, setCurrentText] = useState("Welcome to Aadish Kotadia's portfolio. Click READ to hear about this section.");
  const [currentSection, setCurrentSection] = useState('home');
  const utteranceRef = useRef(null);

  // Natural, human-sounding speech — no robotic abbreviations
  const sectionSpeeches = {
    'home': "Hey, welcome! You're looking at the portfolio of Aadish Kotadia. He's a Business Analyst and Engineer who loves working with data — whether that's building dashboards, training machine learning models, or digging into messy datasets to find what actually matters. He's done four internships, worked on some really cool real-world projects, and he's genuinely passionate about the space where data meets business decisions. Take a scroll through and see what he's been up to.",

    'about': "So a little bit about Aadish. He's currently doing his MBA in Business Analytics at the National Institute of Technology in Surat, and before that he completed his engineering degree in Information and Communication Technology from Adani University, where he graduated with a seven point eight GPA. He's someone who's equally comfortable writing Python scripts and presenting insights to stakeholders — that mix of technical depth and business thinking is really what sets him apart. You can get in touch with him at kotadiaaadish1234 at gmail dot com.",

    'skills': "Aadish has a pretty well-rounded technical toolkit. On the coding and data side, he works with Python — Pandas, NumPy, Matplotlib, Plotly, Streamlit — and he's solid with SQL too. For dashboards and business intelligence, he's really experienced with Power BI, including the DAX language and data modelling, and he also works with Tableau and Excel. He knows Google Analytics 4 and BigQuery well from his time in digital analytics roles. And on the more advanced side, he's done work with machine learning pipelines, RAG pipelines for AI-powered document retrieval, and prompt engineering. He can also handle the business side of things — gathering requirements, defining KPIs, and communicating findings to non-technical teams.",

    'experience': "Aadish has had four solid internship experiences. His most recent one was at Evamp Technologies, where he worked as a Business Analyst from May to July 2026. There, he built three full Power BI dashboards for an electric vehicle charging network called Mobilane — tracking over thirty thousand charging sessions across fifty-six stations. He also did some really interesting work segmenting over thirty-three thousand EV users to figure out who was churning and why. On top of that, he built an AI-powered bot using Ollama that automated how the team handled government tender documents, and he delivered a number-plate detection system using a computer vision model called YOLOv8. Before that, at Ora Infotech, he built over five Power BI dashboards for clients and cut manual reporting time by forty percent. And at Jubatsubai Labs, he set up Google Analytics and Tag Manager across five different ad platforms and automated email campaigns that touched over a thousand leads.",

    'projects': "Two projects really stand out in Aadish's portfolio. The first is a financial analysis dashboard he built for Nestlé India using Power BI and DAX — it covers everything from revenue and net profit to EBITDA, ratio analysis, and valuation, all in one interactive dashboard that makes it really easy for stakeholders to spot trends and risks. The second is an AI Workforce Risk Analytics Platform he built in Python with Scikit-learn and Streamlit. The idea was to use machine learning to figure out which jobs are most at risk from AI automation, based on factors like skill gaps and remote feasibility. The model hit over ninety-two percent accuracy, and the whole thing is wrapped in a clean real-time dashboard.",

    'certifications': "Aadish has earned five solid certifications. He completed the McKinsey Forward Program and the Deloitte Australia Data Analytics simulation, both in 2025 — those are pretty competitive programmes. He's also Google certified in Analytics, and he's completed the Introduction to Data Science course from Cisco and Python for Data Science from IBM. Taken together, they reflect someone who's consistently upskilling across both business strategy and technical data work.",

    'contact': "If you'd like to get in touch with Aadish, he's genuinely open to full-time roles, internships, and freelance analytics projects. You can email him at kotadiaaadish1234 at gmail dot com, or call him at plus 91 97372 59929. He's also on LinkedIn as Aadish Kotadia and on GitHub as Aadish 2003, where you can check out his code. Or just use the contact form right here on this page — he'll get back to you!"
  };

  const displayTexts = {
    'home': "Aadish Kotadia — Data Analyst & Business Intelligence Professional.",
    'about': "About — MBA (Business Analytics) at SVNIT | B.E. ICT from Adani University.",
    'skills': "Skills — Python, SQL, Power BI, DAX, GA4, ML & RAG Pipelines.",
    'experience': "Experience — 4 internships including Evamp Technologies & Ora Infotech.",
    'projects': "Projects — Nestle BI Dashboard & AI Workforce Risk Platform (92%+ accuracy).",
    'certifications': "Certifications — McKinsey, Deloitte, Google GA4, Cisco & IBM.",
    'contact': "Contact — Open to roles, internships & freelance analytics work."
  };

  useEffect(() => {
    window.speechSynthesis.getVoices();

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'home';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - window.innerHeight / 3) {
          current = section.getAttribute('id');
        }
      });

      if (current !== currentSection) {
        setCurrentSection(current);
        if (window.speechSynthesis.speaking) {
          window.speechSynthesis.cancel();
          setIsSpeaking(false);
        }
        if (displayTexts[current]) {
          setCurrentText(displayTexts[current]);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 500);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  const speakText = (textToSpeak) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    // Smart voice selection: prefer British male, fall back gracefully
    const voices = window.speechSynthesis.getVoices();
    const preferred = [
      'Google UK English Male',
      'Microsoft George - English (United Kingdom)',
      'Daniel',
      'Arthur',
      'Google UK English Female'
    ];
    let chosenVoice = null;
    for (const name of preferred) {
      chosenVoice = voices.find(v => v.name.includes(name));
      if (chosenVoice) break;
    }
    if (!chosenVoice) chosenVoice = voices.find(v => v.lang === 'en-GB') || voices.find(v => v.lang.startsWith('en'));
    if (chosenVoice) utterance.voice = chosenVoice;

    utterance.pitch = 1.0;     // Natural pitch — not too deep, not robotic
    utterance.rate = 1.05;     // Slightly faster than default — how humans actually talk
    utterance.volume = 1;

    utterance.onstart = () => {
      setIsSpeaking(true);
      setCurrentText("🔊 Reading section aloud...");
    };
    utterance.onend = () => {
      setIsSpeaking(false);
      setCurrentText(displayTexts[currentSection] || "At your service.");
    };
    utterance.onerror = () => {
      setIsSpeaking(false);
      setCurrentText(displayTexts[currentSection] || "At your service.");
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const handlePlayAudio = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setCurrentText(displayTexts[currentSection] || "At your service.");
      return;
    }
    const speech = sectionSpeeches[currentSection];
    if (speech) speakText(speech);
  };

  return (
    <div
      id="ai-assistant-floating"
      style={{
        position: 'fixed', bottom: '2rem', left: '2rem', zIndex: 99990,
        display: 'flex', alignItems: 'center', gap: '15px',
        background: 'rgba(5, 10, 20, 0.92)', backdropFilter: 'blur(16px)',
        border: `1px solid rgba(0, 255, 255, ${isSpeaking ? '0.8' : '0.4'})`,
        borderRadius: '50px',
        padding: '10px 20px 10px 10px',
        boxShadow: `0 20px 40px rgba(0,0,0,0.8), 0 0 ${isSpeaking ? '30px' : '20px'} rgba(0, 255, 255, ${isSpeaking ? '0.4' : '0.2'})`,
        transition: 'all 0.4s ease'
      }}
    >
      <div style={{
        width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden',
        border: '2px solid #00FFFF',
        boxShadow: `0 0 ${isSpeaking ? '22px' : '10px'} rgba(0,255,255,${isSpeaking ? '0.9' : '0.5'})`,
        transition: 'box-shadow 0.4s ease'
      }}>
        <img src="/aadish-profile.png" alt="Aadish Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: '210px' }}>
        <div style={{
          fontSize: '0.78rem',
          color: isSpeaking ? '#00FFFF' : '#8ab8c0',
          lineHeight: '1.5',
          fontFamily: "'JetBrains Mono', monospace",
          textShadow: isSpeaking ? '0 0 8px rgba(0,255,255,0.8)' : 'none',
          transition: 'all 0.4s ease'
        }}>
          {currentText}
        </div>
        <div style={{ display: 'flex', gap: '8px', marginTop: '2px' }}>
          <button onClick={handlePlayAudio} style={{
            background: isSpeaking
              ? 'linear-gradient(90deg, #ff4444, #ff8800)'
              : 'linear-gradient(90deg, #0088ff, #00ffff)',
            border: 'none',
            padding: '6px 14px', borderRadius: '20px', color: '#000', fontSize: '0.72rem',
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: '800',
            fontFamily: "'JetBrains Mono', monospace",
            transition: 'background 0.4s ease'
          }}>
            {isSpeaking ? <Square size={11} /> : <Play size={11} />}
            <span>{isSpeaking ? 'STOP' : 'READ'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
