import React, { useState, useEffect } from 'react';
import { Play, Square } from 'lucide-react';

const AIAssistant = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentText, setCurrentText] = useState("Greetings, Sir. I am Aadish's personal assistant. How may I be of service?");
  const [currentSection, setCurrentSection] = useState('home');

  const sectionSpeeches = {
    'home': "Welcome, Sir. You are currently viewing the primary interface of Aadish Kotadia, a highly driven Data Analyst.",
    'about': "This is the About sector. Aadish is presently acquiring his MBA in Business Analytics at SVNIT.",
    'skills': "Viewing the Skills matrix. Aadish's core proficiencies include Python, SQL, and Machine Learning models.",
    'experience': "Experience logs accessed. He is currently operating as a Business Analyst Intern at Evamp Technologies.",
    'projects': "Accessing Project archives. Notable constructs include an AI Workforce Risk Analytics Platform.",
    'certifications': "Certifications sector. Records indicate accolades from McKinsey, Deloitte, and Google.",
    'contact': "Communications relay. You may establish contact with Aadish through the forms provided here.",
    'talk-to-aadish': "You have reached the Generative AI sector. You may speak with the local language model here."
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
        if (sectionSpeeches[current]) {
          setCurrentText(sectionSpeeches[current]);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 500);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  const speakText = (textToSpeak) => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    
    const voices = window.speechSynthesis.getVoices();
    const jarvisVoice = voices.find(v => v.name.includes('Google UK English Male') || v.name.includes('Great Britain') || (v.lang === 'en-GB' && v.name.includes('Male')));
    if (jarvisVoice) utterance.voice = jarvisVoice;
    
    utterance.pitch = 0.8;
    utterance.rate = 1.05;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    
    utterance.onboundary = (e) => {
      if (e.name === 'word') {
        let end = textToSpeak.indexOf(' ', e.charIndex);
        if (end === -1) end = textToSpeak.length;
        setCurrentText("Speaking: " + textToSpeak.substring(e.charIndex, end) + "...");
      }
    };

    window.speechSynthesis.speak(utterance);
  };

  const handlePlayAudio = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setCurrentText(sectionSpeeches[currentSection] || "At your service.");
      return;
    }
    speakText(currentText.startsWith("Speaking:") ? sectionSpeeches[currentSection] : currentText);
  };

  return (
    <div 
      id="ai-assistant-floating"
      style={{ 
        position: 'fixed', bottom: '2rem', left: '2rem', zIndex: 99990,
        display: 'flex', alignItems: 'center', gap: '15px',
        background: 'rgba(5, 10, 20, 0.9)', backdropFilter: 'blur(16px)',
        border: '1px solid rgba(0, 255, 255, 0.4)', borderRadius: '50px',
        padding: '10px 20px 10px 10px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.8), 0 0 20px rgba(0, 255, 255, 0.2)'
      }}
    >
      <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #00FFFF', boxShadow: '0 0 10px rgba(0,255,255,0.5)' }}>
        <img src="/aadish-profile.png" alt="Aadish Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: '200px' }}>
        <div style={{
          fontSize: '0.85rem', color: '#00FFFF', lineHeight: '1.4', 
          maxHeight: '60px', overflowY: 'auto',
          fontFamily: "'JetBrains Mono', monospace",
          textShadow: '0 0 5px rgba(0,255,255,0.5)'
        }}>
          {currentText}
        </div>
        <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
          <button onClick={handlePlayAudio} style={{
            background: 'linear-gradient(90deg, #0088ff, #00ffff)', border: 'none', 
            padding: '6px 12px', borderRadius: '20px', color: '#000', fontSize: '0.75rem',
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '800',
            fontFamily: "'JetBrains Mono', monospace"
          }}>
            {isSpeaking ? <Square size={12} /> : <Play size={12} />}
            <span>{isSpeaking ? 'STOP' : 'READ'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
