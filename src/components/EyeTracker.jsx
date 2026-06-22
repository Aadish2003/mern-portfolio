import React, { useEffect, useState } from 'react';

const EyeTracker = () => {
  const [isCalibrating, setIsCalibrating] = useState(true);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (window.webgazer) {
      window.webgazer.setGazeListener((data, elapsedTime) => {
        if (data == null) {
          return;
        }
        const xPrediction = data.x;
        const yPrediction = data.y;
        
        // Map gaze to CSS variables for parallax
        const xRatio = (xPrediction / window.innerWidth - 0.5) * 2;
        const yRatio = (yPrediction / window.innerHeight - 0.5) * 2;
        
        document.documentElement.style.setProperty('--gaze-x', xRatio);
        document.documentElement.style.setProperty('--gaze-y', yRatio);
      }).begin();

      // Hide the default video preview if we want it less intrusive
      // window.webgazer.showVideoPreview(true).showPredictionPoints(true);
    }

    return () => {
      if (window.webgazer) {
        window.webgazer.end();
      }
    };
  }, []);

  const handleCalibrationClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount >= 8) {
      setIsCalibrating(false);
      if (window.webgazer) {
        window.webgazer.showVideoPreview(false).showPredictionPoints(false);
      }
    }
  };

  if (!isCalibrating) return null;

  return (
    <div className="eye-calibration-overlay" style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
      backgroundColor: 'rgba(10, 10, 18, 0.95)', zIndex: 9999,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
    }}>
      <h2 style={{ color: '#fff', marginBottom: '1rem', textAlign: 'center' }}>
        Eye-Tracking Calibration
      </h2>
      <p style={{ color: '#aaa', marginBottom: '2rem', maxWidth: '600px', textAlign: 'center' }}>
        To enable the eye-tracking parallax effect, please follow your cursor and click the dots around the screen. 
        Ensure your face is visible in the webcam preview.
      </p>
      
      <div style={{ position: 'relative', width: '80%', height: '60vh', border: '1px dashed rgba(255,255,255,0.2)' }}>
        {/* We would place dots in corners and center for the user to click */}
        {[
          {top: '0%', left: '0%'}, {top: '0%', left: '50%'}, {top: '0%', left: '100%'},
          {top: '50%', left: '0%'}, {top: '50%', left: '50%'}, {top: '50%', left: '100%'},
          {top: '100%', left: '0%'}, {top: '100%', left: '50%'}, {top: '100%', left: '100%'}
        ].map((pos, i) => (
          <button 
            key={i}
            onClick={handleCalibrationClick}
            style={{
              position: 'absolute', ...pos, transform: 'translate(-50%, -50%)',
              width: '30px', height: '30px', borderRadius: '50%', 
              backgroundColor: '#A855F7', cursor: 'pointer', border: 'none',
              boxShadow: '0 0 15px #A855F7'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default EyeTracker;
