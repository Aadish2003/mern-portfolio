import React, { useState, useEffect, useRef } from 'react';
import { Mic, Square } from 'lucide-react';

const TalkToAadish = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isInterviewActive, setIsInterviewActive] = useState(false);
  const isInterviewActiveRef = useRef(false);
  const [currentText, setCurrentText] = useState("Greetings. I am Jarvis, an AI trained on Aadish's portfolio. Click 'Start Interview' to begin.");
  const [chatMessages, setChatMessages] = useState([]);
  
  const recognitionRef = useRef(null);

  const JARVIS_SYSTEM_PROMPT = `Role: Jarvis, Aadish Kotadia's human-like AI assistant.
Tone: Conversational, highly intelligent, concise (1-2 sentences). Act like you are in a live voice interview.
CRITICAL: DO NOT use markdown, asterisks, bullet points, or numbered lists. Use plain conversational text ONLY.

Data:
- Edu: SVNIT MBA Analytics (2025-27), Adani B.E. ICT (2021-25)
- Exp: Ora Infotech Data Analyst, Jubatsubai Tech Consultant, IMS Mktg.
- Proj: AI Workforce Risk Platform (ML, Streamlit), Nestle Financial Dashboard (Power BI), Space Tourism (Flask).
- Skills: Python, SQL, ML, Power BI, Streamlit.

Goal: Pass the data analyst technical interview. Explain tools technically if asked. Decline non-tech/non-Aadish topics.`;

  useEffect(() => {
    window.speechSynthesis.getVoices();
    
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true; // Always ON, interruptible microphone
      recognition.interimResults = true;
      // Removed hardcoded 'en-IN' so Chrome can attempt to auto-detect spoken language (Hindi/Gujarati/English)
      
      recognition.onstart = () => {
        setIsListening(true);
        setCurrentText("Listening... Ask me a question.");
      };

      recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }
        
        if (finalTranscript) {
          // Fix common speech recognition mishearings of "Aadish" from the video
          const correctedTranscript = finalTranscript.replace(/\b(a dish|addish|adish|aadesh|adesh|irish|hardy's|hardis|ardis|artis|alish|hadish)\b/gi, 'Aadish');
          
          setCurrentText(`You asked: "${correctedTranscript}"`);
          
          // Interrupt Jarvis immediately if he is already speaking
          window.speechSynthesis.cancel();
          setIsSpeaking(false);
          
          // DO NOT stop recognition. It is always on.
          fetchOllamaResponse(correctedTranscript);
        } else if (interimTranscript) {
          setCurrentText(`Listening: ${interimTranscript}...`);
        }
      };

      recognition.onend = () => {
        setIsListening(false);
        // Because it's always-on, restart it if the interview is still active and it crashed/ended
        if (isInterviewActiveRef.current) {
          setTimeout(() => {
            try { recognition.start(); } catch(e) {}
          }, 500);
        }
      };

      recognition.onerror = (event) => {
        console.error("Speech error:", event.error);
        if (event.error === 'not-allowed') {
          setCurrentText("Error: Microphone access denied by Chrome. Please click the camera/mic icon in the URL bar to allow.");
        } else if (event.error === 'no-speech') {
          // Ignore, let it keep listening
        } else {
          setCurrentText(`Mic Error: ${event.error}. Check Windows microphone settings.`);
        }
      };
      
      recognitionRef.current = recognition;
    } else {
      setCurrentText("Error: Your browser does not support Speech Recognition. Use Google Chrome.");
    }
  }, []);

  const speakText = (textToSpeak, clearQueue = true) => {
    if (clearQueue) {
      window.speechSynthesis.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    
    const voices = window.speechSynthesis.getVoices();
    let jarvisVoice;
    
    // Dynamically detect language based on unicode characters to pick the perfect native TTS voice
    if (/[\u0900-\u097F]/.test(textToSpeak)) {
      // Hindi (Devanagari)
      jarvisVoice = voices.find(v => v.lang.includes('hi-IN') && v.name.includes('Natural')) || voices.find(v => v.lang.includes('hi-IN'));
    } else if (/[\u0A80-\u0AFF]/.test(textToSpeak)) {
      // Gujarati
      jarvisVoice = voices.find(v => v.lang.includes('gu-IN') && v.name.includes('Natural')) || voices.find(v => v.lang.includes('gu-IN'));
    } else {
      // Default to English Indian
      jarvisVoice = voices.find(v => v.lang.includes('en-IN') && v.name.includes('Natural') && (v.name.includes('Male') || v.name.includes('Ravi')))
        || voices.find(v => v.lang.includes('en-IN') && v.name.includes('Natural'))
        || voices.find(v => v.lang.includes('en-IN') && (v.name.includes('Male') || v.name.includes('Ravi')))
        || voices.find(v => v.lang.includes('en-IN'))
        || voices.find(v => v.name.includes('Natural') && v.name.includes('Male'));
    }
    
    if (jarvisVoice) utterance.voice = jarvisVoice;
    
    utterance.pitch = 0.9;
    utterance.rate = 1.0;

    utterance.onstart = () => setIsSpeaking(true);
    
    utterance.onend = () => {
      // If there are still utterances pending in the TTS stream queue, do NOT stop speaking state
      if (window.speechSynthesis.pending) return;
      setIsSpeaking(false);
    };
    
    window.speechSynthesis.speak(utterance);
  };

  const fetchOllamaResponse = async (query) => {
    setIsProcessing(true);
    setCurrentText("Processing query...");
    
    // Maintain conversation history
    const newUserMessage = { role: 'user', content: query };
    const updatedMessages = [...chatMessages, newUserMessage];
    
    // Keep only the last 6 messages to prevent memory explosion, plus the system prompt
    const conversationHistory = [
      { role: 'system', content: JARVIS_SYSTEM_PROMPT },
      ...updatedMessages.slice(-6)
    ];

    try {
      const response = await fetch('http://localhost:11434/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'llama3.2:3b', // Optimal model for Jarvis (Llama 3.2 3B)
          messages: conversationHistory,
          stream: true, // Enable ultra-fast token streaming
          options: {
            num_ctx: 2048, 
            num_predict: 100, // Enough length for an intelligent response
            temperature: 0.5
          }
        })
      });

      if (!response.ok) throw new Error("Ollama API failed");
      
      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let done = false;
      let fullResponse = "";
      let sentenceBuffer = "";
      
      // Clear any existing speech before we start streaming the new answer
      window.speechSynthesis.cancel();

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split('\n').filter(line => line.trim() !== '');
          for (const line of lines) {
            try {
              const parsed = JSON.parse(line);
              if (parsed.message && parsed.message.content) {
                fullResponse += parsed.message.content;
                // Remove markdown formatting like *, #, ` to prevent TTS issues
                let cleanContent = parsed.message.content.replace(/[*#`]/g, '');
                sentenceBuffer += cleanContent;
                
                setCurrentText(fullResponse);

                // Sentence boundary detection: require a space after punctuation to prevent breaking on "1." or "A.I."
                const match = sentenceBuffer.match(/([.!?]+)(\s)/);
                if (match || (parsed.done && sentenceBuffer.trim())) {
                  let splitIndex = match ? match.index + match[0].length : sentenceBuffer.length;
                  const sentence = sentenceBuffer.substring(0, splitIndex).trim();
                  
                  if (sentence.length > 0) {
                    speakText(sentence, false); // false = queue the audio, do not clear previous chunks
                  }
                  sentenceBuffer = sentenceBuffer.substring(splitIndex); // retain any words after the punctuation
                }
              }
            } catch (e) {
               // ignore
            }
          }
        }
      }
      
      // Save AI response to memory
      setChatMessages([...updatedMessages, { role: 'assistant', content: fullResponse }]);
      
      // Speak any remaining text that didn't end in explicit punctuation
      if (sentenceBuffer.trim().length > 0) {
        speakText(sentenceBuffer.trim(), false);
      }
      
    } catch (error) {
      console.error(error);
      const fallbackMsg = "My apologies. I am unable to connect to the local AI mainframe.";
      setCurrentText(fallbackMsg);
      speakText(fallbackMsg, true);
    } finally {
      setIsProcessing(false);
    }
  };

  const toggleInterview = () => {
    if (isInterviewActive) {
      // Stop interview
      setIsInterviewActive(false);
      isInterviewActiveRef.current = false;
      setIsListening(false);
      setIsSpeaking(false);
      window.speechSynthesis.cancel();
      if (recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch(e){}
      }
      setCurrentText("Interview ended. Click 'Start Interview' to reconnect.");
    } else {
      // Start interview
      if (!recognitionRef.current) {
        alert("Your browser doesn't support Voice Navigation. Please use Chrome.");
        return;
      }
      setIsInterviewActive(true);
      isInterviewActiveRef.current = true;
      setCurrentText("Interview started.");
      setChatMessages([]); // Clear memory for a new interview
      const intro = "Hi there! I'm Jarvis, Aadish's assistant. What would you like to know about his portfolio or experience?";
      
      try { recognitionRef.current.start(); } catch(e){}
      speakText(intro, true);
    }
  };

  return (
    <section id="talk-to-aadish" style={{ padding: '6rem 0', background: 'rgba(5, 10, 20, 0.8)', borderTop: '1px solid rgba(0, 255, 255, 0.2)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div className="sh rev">
          <span className="sh-tag">Generative AI</span>
          <h2>Talk to <span className="gt">Aadish's AI</span></h2>
          <p>Powered by local LLMs. Ask anything about my portfolio, skills, and experience.</p>
        </div>

        <div 
          className={isSpeaking || isProcessing ? 'speaking' : ''}
          style={{ 
            marginTop: '2rem',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px',
            background: 'rgba(5, 10, 20, 0.9)', backdropFilter: 'blur(16px)',
            border: '1px solid rgba(0, 255, 255, 0.4)', borderRadius: '20px',
            padding: '40px', maxWidth: '600px', width: '100%',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8), 0 0 20px rgba(0, 255, 255, 0.2)'
          }}
        >
          <div className="ai-avatar-container" style={{ width: '100px', height: '100px', margin: '0 auto 20px' }}>
            <div className="jarvis-core"></div>
            <div className="jarvis-ring"></div>
            <div className="jarvis-ring" style={{ animationDirection: 'reverse', width: '80%', height: '80%', animationDuration: '7s' }}></div>
          </div>

          <div style={{
            fontSize: '1rem', color: '#00FFFF', lineHeight: '1.6', 
            minHeight: '80px', width: '100%',
            fontFamily: "'JetBrains Mono', monospace",
            textShadow: '0 0 5px rgba(0,255,255,0.5)',
            background: 'rgba(0,0,0,0.4)', padding: '20px', borderRadius: '10px',
            border: '1px solid rgba(0, 255, 255, 0.1)'
          }}>
            {currentText}
          </div>

          <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
            <button onClick={toggleInterview} style={{
              background: isInterviewActive ? 'rgba(239, 68, 68, 0.2)' : 'linear-gradient(90deg, #0088ff, #00ffff)', 
              border: isInterviewActive ? '1px solid #EF4444' : 'none', 
              padding: '12px 30px', borderRadius: '30px', 
              color: isInterviewActive ? '#EF4444' : '#000', fontSize: '1rem',
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '800',
              fontFamily: "'JetBrains Mono', monospace", transition: 'all 0.3s ease'
            }}>
              {isInterviewActive ? <Square size={20} /> : <Mic size={20} />}
              <span>{isInterviewActive ? 'STOP INTERVIEW' : 'START INTERVIEW'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalkToAadish;
