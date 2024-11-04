"use client";

import React, { useContext } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { motion } from "framer-motion";
import Image from "next/image";
import { ThemeContext } from "@/contexts/ThemeProvider";

const Navbar = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <nav
      role="navigation"
      className="flex justify-between h-12 sm:h-16 items-center w-screen px-5 sm:px-24 z-10 fixed backdrop-blur bg-gray-200/80 dark:bg-gray-900/80"
    >
      <a
        href="https://faishal24.my.id/"
        className="text-xl text-gray-200 font-bold font-mono"
      >
        {theme === "dark" ? (
          <Image
            src="/ico_transparent.png"
            alt="icon"
            height={36}
            width={36}
            priority
            className="h-[30px] w-[30px] sm:h-[36px] sm:w-[36px]"
          />
        ) : (
          <Image
            src="/ico_transparent_dark.png"
            alt="icon"
            height={36}
            width={36}
            priority
            className="h-[30px] w-[30px] sm:h-[36px] sm:w-[36px]"
          />
        )}
      </a>

      <motion.div
        key={theme}
        initial={{ opacity: 0, rotate: 180 }}
        animate={{ opacity: 1, rotate: 360 }}
        exit={{ opacity: 0, rotate: 0 }}
        transition={{ duration: 0.5 }}
        className="cursor-pointer"
      >
        {theme == "dark" ? (
          <IoMoon
            className="text-2xl text-gray-200 font-bold font-mono select-none"
            onClick={changeTheme}
          />
        ) : (
          <IoSunny
            className="text-2xl text-gray-900 font-bold font-mono select-none"
            onClick={changeTheme}
          />
        )}
      </motion.div>
    </nav>
  );
};

export default Navbar;
