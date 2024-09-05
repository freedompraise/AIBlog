import { useState } from "react";
import { useForm } from "react-hook-form";
import backgroundImage from "../assets/images/background-1.jpg";
import Logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const NavNewsletter = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <form
      id="newsletter"
      className="newsletter-container overflow-auto"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mx-auto flex flex-col text-center">
        <img src={Logo} alt="logo" className="w-24 mx-auto mt-4" />
        <h2 className="text-3xl font-sans mt-6 mb-4">
          Subscribe to our newsletter
        </h2>
        <p className="mb-4">
          Get the latest news and updates delivered straight to your inbox.
        </p>

        {isSubmitted ? (
          <p className="text-lg mb-4 font-semibold font-mono text-gray-400">
            You've successfully subscribed!
          </p>
        ) : (
          <div className="flex sm:flex-col subscription lg:flex-row w-full">
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@gmail.com"
              className="border border-indigo-600 rounded-md p-2 w-full mb-4 focus:border-indigo-500"
              required
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 font-bold py-2 rounded-md mb-8">
              SUBMIT
            </button>
          </div>
        )}

        <div className="flex mt-8 ends items-end justify-center gap-4">
          <div>
            <p className="text-sm">Powered by:</p>
            <p className="text-sm font-mono">Elite Global Intelligence INC</p>
          </div>
          <div className="links flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61555984266860"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="text-blue-700"
                icon={faFacebook}
                size="1x"
              />
            </a>
            <a
              href="https://x.com/EliteglobalAI?t=gqPw7vEh43XQNoIXYuz_VA&s=09"
              className="text-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} size="1x" />
            </a>
            <a
              href="https://www.instagram.com/eliteglobalai_?igsh=MWdpcm96Y202M3U3OQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-pink-700"
                size="1x"
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
                size="1x"
              />
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NavNewsletter;
