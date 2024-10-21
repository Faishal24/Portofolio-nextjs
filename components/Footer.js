import React from "react";
import { FaInstagram, FaGithub, FaMedium, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiTryhackme } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-row gap-6 justify-center pt-3">
        <a href="https://github.com/Faishal24" target="_blank" aria-label="Github link">
          <FaGithub className="text-gray-800 dark:text-gray-200 text-2xl transition transform hover:scale-125 duration-0"/>
        </a>
        <a href="https://www.linkedin.com/in/faishal-hakim-62b849257/" target="_blank" aria-label="Linkedin link">
          <FaLinkedin className="text-gray-800 dark:text-gray-200 text-2xl transition transform hover:scale-125 duration-0" />
        </a>
        <a href="https://www.instagram.com/milanta169/" target="_blank" aria-label="Instagram link">
          <FaInstagram className="text-gray-800 dark:text-gray-200 text-2xl transition transform hover:scale-125 duration-0" />
        </a>
        <a href="https://medium.com/@Faishal24" target="_blank" aria-label="Medium link">
          <FaMedium className="text-gray-800 dark:text-gray-200 text-2xl transition transform hover:scale-125 duration-0" />
        </a>
        <a href="https://x.com/DuapatSan" target="_blank" aria-label="Twitter link">
          <FaXTwitter className="text-gray-800 dark:text-gray-200 text-xl transition transform hover:scale-125 duration-0" />
        </a>
        <a href="https://tryhackme.com/p/GodongIjo" target="_blank" aria-label="Tryhackme link">
          <SiTryhackme className="text-gray-800 dark:text-gray-200 text-2xl transition transform hover:scale-125 duration-0" />
        </a>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm text-center pb-5 pt-3">
        Faishal © 2024
      </p>
    </footer>
  );
};

export default Footer;