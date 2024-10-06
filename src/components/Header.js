import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav style={{ backgroundColor: '#eaddcf', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <h1 style={{ color: '#5c3b1e', margin: '0' }}>Almond AI</h1>
      <ul style={{ listStyle: 'none', margin: '0', padding: '0', display: 'flex' }}>
        <li style={{ marginRight: '20px' }}><Link to="/" style={{ color: '#5c3b1e', textDecoration: 'none' }}>Home</Link></li>
        <li style={{ marginRight: '20px' }}><Link to="/about-us" style={{ color: '#5c3b1e', textDecoration: 'none' }}>About Us</Link></li>
        <li style={{ marginRight: '20px' }}><Link to="/products" style={{ color: '#5c3b1e', textDecoration: 'none' }}>Products</Link></li>
        <li><Link to="/blog" style={{ color: '#5c3b1e', textDecoration: 'none' }}>Blog</Link></li>
      </ul>
    </nav>
  );
}

export default Header;