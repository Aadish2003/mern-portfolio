import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SpotlightCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseOver = (e) => {
      // Check if we are hovering over an interactive element
      if (['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(e.target.tagName) || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          backgroundColor: '#06B6D4',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999
        }}
      />
      <motion.div
        className="cursor-spotlight"
        animate={{
          x: mousePosition.x - (isHovering ? 60 : 20),
          y: mousePosition.y - (isHovering ? 60 : 20),
          width: isHovering ? 120 : 40,
          height: isHovering ? 120 : 40,
          backgroundColor: isHovering ? 'rgba(124, 58, 237, 0.15)' : 'rgba(6, 182, 212, 0.3)'
        }}
        transition={{ type: 'spring', mass: 0.2, stiffness: 100, damping: 15 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: isHovering ? 'blur(2px)' : 'none',
          pointerEvents: 'none',
          zIndex: 99998,
          boxShadow: isHovering ? '0 0 40px rgba(124, 58, 237, 0.5)' : '0 0 20px rgba(6, 182, 212, 0.2)'
        }}
      />
    </>
  );
};

export default SpotlightCursor;
