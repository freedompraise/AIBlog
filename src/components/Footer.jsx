import { useRef } from "react";
import { FootNewsletter } from "./index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const footerRef = useRef(null);
  const paragraph = `
    ${`Subscribe to Elite Global AI's newsletters to receive notifications, information and skill training on how AI is changing the world.`}
  `.trim();

  return (
    <footer
      ref={footerRef}
      id="footer"
      className="text-black py-8 px-2 lg:px-56 mt-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-28 lg:ml-2 text-center lg:text-left">
        <div>
          <FootNewsletter />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">About This Blog</h2>
          <p className="text-lg px-4 lg:px-0">{paragraph}</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 sm:mt-8">Connect with Us</h2>
          <div className="flex justify-center lg:justify-start gap-4 mb-4">
            <a
              href="https://www.facebook.com/profile.php?id=61555984266860"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="text-blue-700"
                icon={faFacebook}
                size="2x"
              />
            </a>
            <a
              href="https://x.com/EliteglobalAI?t=gqPw7vEh43XQNoIXYuz_VA&s=09"
              className="text-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/eliteglobalai_?igsh=MWdpcm96Y202M3U3OQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-pink-700"
                size="2x"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/elite-global-ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-blue-700"
                size="2x"
              />
            </a>
          </div>
          <p className="text-sm mt-2">
            &copy; {new Date().getFullYear()}. Elite Global AI. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
