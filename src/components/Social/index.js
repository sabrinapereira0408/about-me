import React from 'react';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

import './styles.css';

export default function Social() {
  return (
    <div className="social">
      <ul className="social-contact">
        <li>
          <FiInstagram />
          <a
            href="https://www.instagram.com/sabriina.siilva5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <FiGithub />
          <a
            href="https://github.com/sabrinapereira0408"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <FiLinkedin />
          <a
            href="https://www.linkedin.com/in/sabrina-silva-490640184/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </li>
      </ul>
    </div>
  );
}
