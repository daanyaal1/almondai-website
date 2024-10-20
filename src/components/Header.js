import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/LOGO.webp'; // Adjust the file name if it's different
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import LinkedIn icon

function Header() {
  return (
    <nav style={{ backgroundColor: '#eaddcf', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src={logo} 
          alt="Almond AI Logo" 
          style={{ 
            height: '80px', 
            width: '80px',  // Ensuring the image is square
            borderRadius: '80%', // Making the image circular
            objectFit: 'cover',  // Ensures the image fits within the circle without distortion
            marginRight: '10px' 
          }} 
        />
        <h1 style={{ color: '#5c3b1e', margin: '0' }}>Almond AI</h1>
      </div>
      <ul style={{ listStyle: 'none', margin: '0', padding: '0', display: 'flex', alignItems: 'center' }}>
        <li style={{ marginRight: '20px' }}>
          <a href="https://medium.com/@daanyaal" target="_blank" rel="noopener noreferrer" style={{ color: '#5c3b1e', textDecoration: 'none' }}>Blog</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/almond-ai" target="_blank" rel="noopener noreferrer" style={{ color: '#5c3b1e', textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '24px' }} /> {/* LinkedIn Icon */}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
