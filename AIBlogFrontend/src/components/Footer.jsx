import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  // Generate random Italian paragraph using lorem ipsum generator
  const paragraph = `
    ${`Subscribe to Elite Global AI's newsletters to receive notifications, information and skill training on how AI is changing the world.`}
  `.trim();

  return (
    <footer className="bg-gray-800 text-black bg-white py-2">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-2xl mt-6 mb-4 font-bold">About This Blog</h2>
        <p className="text-lg text-center ">{paragraph}</p>

        <div className="flex mt-4 items-center justify-center gap-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>

        <p className="text-sm text-center mt-4">&copy; {new Date().getFullYear()}. Elite Global AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
