import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="https://github.com/ArturBDev"
            className="text-white hover:text-gray-400 transition duration-300"
            aria-label="GitHub"
          >
            <AiOutlineGithub className="text-3xl" />
          </a>
          <a
            href="https://linkedin.com/in/arturbernardosantos"
            className="text-white hover:text-gray-400 transition duration-300"
            aria-label="LinkedIn"
          >
            <AiOutlineLinkedin className="text-3xl" />
          </a>
        </div>
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Artur Santos - All rights reserved.
        </p>
      </div>
    </footer>
  );
};
