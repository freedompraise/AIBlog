import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  // Generate random Italian paragraph using lorem ipsum generator
  const paragraph = `
    ${`Subscribe to Elite Global AI's newsletters to receive notifications, information and skill training on how AI is changing the world.`}
  `.trim();

  return (
    <footer className="bg-gray-800 text-black bg-white py-2">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-2xl mt-6 mb-4 font-bold">About This Blog</h2>
        <p className="text-lg text-center">{paragraph}</p>

        <div className="flex mt-4 items-center justify-center gap-4">
          <a href="https://www.facebook.com/profile.php?id=61555984266860" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="text-blue-700" icon={faFacebook} size="2x" />
          </a>
          <a href="https://x.com/EliteglobalAI?t=gqPw7vEh43XQNoIXYuz_VA&s=09" className="text-black" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com/eliteglobalai_?igsh=MWdpcm96Y202M3U3OQ==" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-pink-700" size="2x" />
          </a>
        </div>

        <p className="text-sm text-center mt-4">&copy; {new Date().getFullYear()}. Elite Global AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
