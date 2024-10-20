import React from 'react';
import logo from '../images/LOGO.webp'; // Adjust if necessary

function LinkedInBanner() {
  return (
    <div style={{ 
      backgroundColor: '#eaddcf', 
      height: '200px',  // Reduced height
      width: '1200px',  // Reduced width
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      padding: '1rem',
      boxSizing: 'border-box',
    }}>
      {/* URL as superscript to the left of company name */}
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <h3 style={{ color: '#5c3b1e', margin: '0', fontSize: '6px', transform: 'translateY(-8px)' }}>
        🌐 www.almondai.io
        </h3>
        <h1 style={{ color: '#5c3b1e', margin: '0 5px', fontSize: '20px' }}>Almond AI</h1>
        <img 
          src={logo} 
          alt="Almond AI Logo" 
          style={{ 
            height: '32px',  // Same height as company name text
            width: '32px', 
            borderRadius: '50%', 
            objectFit: 'cover', 
            marginLeft: '5px' // Small gap between logo and text
          }} 
        />
      </div>
    </div>
  );
}

export default LinkedInBanner;