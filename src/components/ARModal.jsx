import React from 'react';
import QRCode from 'react-qr-code';

const ARModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // The URL that the phone needs to open. 
  // We use window.location.origin so it works dynamically (localhost or deployed domain).
  const arUrl = window.location.origin + '/ar.html';

  return (
    <div className="ar-modal-overlay" style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(10, 15, 30, 0.95)', backdropFilter: 'blur(10px)',
      zIndex: 10000, display: 'flex', flexDirection: 'column', 
      alignItems: 'center', justifyContent: 'center', padding: '2rem'
    }}>
      <button onClick={onClose} style={{
        position: 'absolute', top: '2rem', right: '2rem',
        background: 'none', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer'
      }}>
        <i className="fas fa-times"></i>
      </button>

      <div style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h2 style={{ color: '#06B6D4', fontSize: '2.5rem', marginBottom: '1rem' }}>
          <i className="fas fa-vr-cardboard"></i> Holographic Resume
        </h2>
        <p style={{ color: '#aaa', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Experience this portfolio in Augmented Reality. Follow the 2 steps below:
        </p>

        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          
          {/* Step 1: QR Code to open AR Camera */}
          <div style={{
            background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '1rem',
            border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center'
          }}>
            <div style={{ background: '#A855F7', color: '#fff', padding: '0.2rem 1rem', borderRadius: '1rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Step 1
            </div>
            <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Scan with Phone</h3>
            <div style={{ background: '#fff', padding: '1rem', borderRadius: '0.5rem' }}>
              <QRCode value={arUrl} size={150} />
            </div>
            <p style={{ color: '#aaa', marginTop: '1rem', fontSize: '0.9rem', maxWidth: '200px' }}>
              Open your phone camera and scan this to launch the AR view.
            </p>
          </div>

          {/* Step 2: Hiro Marker to point camera at */}
          <div style={{
            background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '1rem',
            border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center'
          }}>
            <div style={{ background: '#06B6D4', color: '#fff', padding: '0.2rem 1rem', borderRadius: '1rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Step 2
            </div>
            <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Point Camera Here</h3>
            <img 
              src="https://jeromeetienne.github.io/AR.js/data/images/HIRO.jpg" 
              alt="Hiro Marker" 
              style={{ width: '182px', height: '182px', objectFit: 'contain', border: '10px solid white' }} 
            />
            <p style={{ color: '#aaa', marginTop: '1rem', fontSize: '0.9rem', maxWidth: '200px' }}>
              Once the AR camera loads on your phone, point it at this symbol to see the hologram.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ARModal;
