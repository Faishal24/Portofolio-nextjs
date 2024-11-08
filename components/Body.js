"use client";

import React, { useState } from "react";
import Posts from "./contents/Posts";
import About from "./contents/About";
import Projects from "./contents/Projects";
import Certificates from "./contents/Certificates";
import Comment from "./contents/Comment";
import { motion, AnimatePresence } from "framer-motion";

const Body = () => {
  const [tab, setTab] = useState("Posts");

  const renderScreen = () => {
    switch (tab) {
      case "Posts":
        return <Posts />;
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Certificates":
        return <Certificates />;
      case "Comment":
        return <Comment />
    }
  };

  return (
    <main role="main" className="pt-2 sm:pt-7">
      <div id="tab">
        <ul className="max-w-full grid grid-flow-col items-center auto-cols-auto sm:auto-cols-[1fr]">
          <li className="flex-grow hover:bg-gray-300 dark:hover:bg-gray-800">
            <a
              onClick={() => setTab("Posts")}
              className={`text-sm sm:text-base font-bold ${
                tab == "Posts"
                  ? "text-gray-800 dark:text-gray-200"
                  : "text-gray-600 dark:text-gray-400"
              } grid place-items-center`}
            >
              <span
                className={
                  tab == "Posts"
                    ? "p-1 sm:px-5 select-none border-y-4 border-transparent border-b-sky-800 dark:border-b-sky-200 transition-none duration-0"
                    : "p-1 sm:px-5 select-none duration-0"
                }
              >
                Posts
              </span>
            </a>
          </li>
          <li className="flex-grow hover:bg-gray-300 dark:hover:bg-gray-800">
            <a
              onClick={() => setTab("About")}
              className={`text-sm sm:text-base font-bold ${
                tab == "About"
                  ? "text-gray-800 dark:text-gray-200"
                  : "text-gray-600 dark:text-gray-400"
              } grid place-items-center`}
            >
              <span
                className={
                  tab == "About"
                    ? "p-1 sm:px-5 select-none border-y-4 border-transparent border-b-sky-800 dark:border-b-sky-200 transition-none duration-0"
                    : "p-1 sm:px-5 select-none duration-0"
                }
              >
                About
              </span>
            </a>
          </li>
          <li className="flex-grow hover:bg-gray-300 dark:hover:bg-gray-800">
            <a
              onClick={() => setTab("Projects")}
              className={`text-sm sm:text-base font-bold ${
                tab == "Projects"
                  ? "text-gray-800 dark:text-gray-200"
                  : "text-gray-600 dark:text-gray-400"
              } grid place-items-center`}
            >
              <span
                className={
                  tab == "Projects"
                    ? "p-1 sm:px-5 select-none border-y-4 border-transparent border-b-sky-800 dark:border-b-sky-200 transition-none duration-0"
                    : "p-1 sm:px-5 select-none duration-0"
                }
              >
                Projects
              </span>
            </a>
          </li>
          <li className="flex-grow hover:bg-gray-300 dark:hover:bg-gray-800">
            <a
              onClick={() => setTab("Certificates")}
              className={`text-sm sm:text-base font-bold ${
                tab == "Certificates"
                  ? "text-gray-800 dark:text-gray-200"
                  : "text-gray-600 dark:text-gray-400"
              } grid place-items-center`}
            >
              <span
                className={
                  tab == "Certificates"
                    ? "p-1 sm:px-5 select-none border-y-4 border-transparent border-b-sky-800 dark:border-b-sky-200 transition-none duration-0"
                    : "p-1 sm:px-5 select-none duration-0"
                }
              >
                Certs
              </span>
            </a>
          </li>
          <li className="flex-grow hover:bg-gray-300 dark:hover:bg-gray-800">
            <a
              onClick={() => setTab("Comment")}
              className={`text-sm sm:text-base font-bold ${
                tab == "Comment"
                  ? "text-gray-800 dark:text-gray-200"
                  : "text-gray-600 dark:text-gray-400"
              } grid place-items-center`}
            >
              <span
                className={
                  tab == "Comment"
                    ? "p-1 sm:px-5 select-none border-y-4 border-transparent border-b-sky-800 dark:border-b-sky-200 transition-none duration-0"
                    : "p-1 sm:px-5 select-none duration-0"
                }
              >
                Comments
              </span>
            </a>
          </li>
        </ul>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.1 }}
          className="content"
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default Body;
