"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "@/contexts/ThemeProvider";

const Navbar = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <nav role="navigation" className="flex justify-between h-14 sm:h-16 items-center w-screen px-5 sm:px-24 z-10 fixed backdrop-blur bg-gray-200/80 dark:bg-gray-900/80">
      <a
        href="https://24-remake.vercel.app/"
        className="text-xl text-gray-200 font-bold font-mono"
      >
        {theme === "dark" ? (
          <Image
            src="/ico_transparent.png"
            alt="icon"
            height={36}
            width={36}
            priority
          />
        ) : (
          <Image
            src="/ico_transparent_dark.png"
            alt="icon"
            height={36}
            width={36}
            priority
          />
        )}
      </a>
      <p
        className="text-xl text-gray-900 dark:text-gray-200 font-bold font-mono select-none"
        onClick={changeTheme}
      >
        24
      </p>
    </nav>
  );
};

export default Navbar;
