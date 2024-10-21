import React from "react";

const About = () => {
  return (
    <div className="px-3 py-3 sm:py-9 sm:px-6 flex flex-col gap-4">
      <p className="text-gray-800 dark:text-gray-200 text-justify">
        Hi, I'm Faishal Hakim! I'm a Full-Stack Developer, Cybersecurity
        Enthusiast with a passion for creating innovative solutions and
        enhancing digital security.
      </p>
      <p className="text-gray-800 dark:text-gray-200 text-justify">
        I am currently a student at the University of Technology Yogyakarta,
        majoring in Informatics. I am focused on studying web and mobile
        application development, and I've worked on a variety of projects
        ranging from web development to native app development.
      </p>
      <div className="text-gray-800 dark:text-gray-200 duration-0">
        <p>I specialize in:</p>
        <ul className="list-disc pl-6 duration-0">
          <li>
            Web Development{" "}
            <span className="text-gray-600 dark:text-gray-400 text-sm">•</span>{" "}
            <span className="text-violet-600 dark:text-violet-400 font-semibold">
              React.js, Node.js, Express.js, MongoDB, Tailwind, DaisyUI,
              Bootstrap.
            </span>
          </li>
          <li>
            Mobile Development{" "}
            <span className="text-gray-600 dark:text-gray-400 text-sm">•</span>{" "}
            <span className="text-green-600 dark:text-green-400 font-semibold">
              React Native, Flutter
            </span>
          </li>
        </ul>
      </div>
      <p className="text-gray-800 dark:text-gray-200 text-justify">
        When I'm not coding, I enjoy playing CTF, exploring new technologies,
        and back then i used to manipulate photos using Photoshop. I'm always
        eager to learn new things and take on challenging projects. Feel free to
        connect with me on LinkedIn, GitHub, or Instagram, or drop me an email
        at{" "}
        <a href="mailto:ishal.2401@gmail.com">
          <span className="text-yellow-600 dark:text-yellow-400 font-semibold">
            ishal.2401@gmail.com
          </span>
        </a>
        .
      </p>
      <p className="text-gray-800 dark:text-gray-200 text-justify">
        You can download my CV{" "}
        <a
          href="/file/CV_Faishal.pdf"
          className="text-blue-600 dark:text-sky-400 font-semibold"
          download
          aria-label="Download Faishal's CV"
        >
          here
        </a>
        .
      </p>
    </div>
  );
};

export default About;
