import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <IconContainer>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} color="#fff" />
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} color="#fff" />
        </a>
        <a href="mailto:your-email@example.com">
          <FaEnvelope size={30} color="#fff" />
        </a>
      </IconContainer>
      <p>&copy; {new Date().getFullYear()} Your Website Name. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
