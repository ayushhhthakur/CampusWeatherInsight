import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Campur Weather Insight <br /><hr /><br/> Created by <a href="https://github.com/ayushhhthakur" target="_blank" style={footerAnchor} rel="noopener noreferrer">Ayush Thakur</a></p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#11101b',
  color: '#fefefe',
  textAlign: 'center',
  padding: '1rem',
  position: 'absolute',
  bottom: '0',
  width: '100%',
};

const footerAnchor = {
    color: '#fefefe',
    textDecoration: 'underline',
};

export default Footer;
