import React, { useEffect, useState } from 'react';
import './ResizeWarning.css';

const ResizeWarning = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize); // Listen to resize

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  if (!isSmallScreen) return null;

  return (
    <div className="resize-warning-glass">
      ⚠️ Not optimized for smaller screens ⚠️
    </div>
  );
};

export default ResizeWarning;
