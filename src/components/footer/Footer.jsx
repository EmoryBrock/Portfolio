import React from 'react';
import './footer.css';

export default function Footer({ setActiveNav }) {
  return (
    <footer>
      <a href='#' className='footer__logo'>Emory Brock</a>

      <ul className="permalinks">
        <li>
          <a href='#' onClick={() => setActiveNav('#')}>Home</a>
        </li>
        <li>
          <a href='#about' onClick={() => setActiveNav('#about')}>About</a>
        </li>
        <li>
          <a href='#portfolio' onClick={() => setActiveNav('#portfolio')}>Portfolio</a>
        </li>
        <li>
          <a href='#contact' onClick={() => setActiveNav('#contact')}>Contact</a>
        </li>
      </ul>
    </footer>
  );
}
