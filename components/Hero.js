"use client"

import React, { useState } from "react";
import { FaCakeCandles, FaCalendarDays, FaTwitter } from "react-icons/fa6";
import Image from "next/image";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="px-3 sm:px-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex justify-between">
        {isLoading && (
          <div class="h-36 w-36 sm:h-40 sm:w-40 rounded-full border-4 border-gray-50 dark:border-gray-900 -mt-[4.5rem] sm:-mt-20 bg-gray-200"></div>
        )}
        <Image
          src="/avatar.jpg"
          alt="avatar"
          className={`h-36 w-36 sm:h-40 sm:w-40 rounded-full border-4 border-gray-50 dark:border-gray-900 -mt-[4.5rem] sm:-mt-20 ${isLoading ? "hidden" : "block"}`}
          onLoad={() => setIsLoading(false)}
          height={144}
          width={144}
          unoptimized
        />
        <a
          href="https://x.com/DuapatSan"
          className="bg-sky-900 dark:bg-sky-100 text-sky-100 dark:text-sky-800 font-bold px-4 py-2 rounded-full h-10 flex items-center gap-2 mt-3"
        >
          Follow
          <FaTwitter className="text-xl text-sky-100 dark:text-sky-800 duration-0" />
        </a>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-200 mt-4">
        Faishal Hakim
      </h1>
      <h4 className="text-gray-900 dark:text-gray-200 font-medium text-sm sm:text-md my-1">
        Always Learn Something New 🔭
      </h4>
      <h4 className="text-gray-900 dark:text-gray-200 text-sm sm:text-md">
        Junior Web Developer
      </h4>

      <div className="flex mt-4 sm:mt-6">
        <div className="flex items-center gap-2">
          <FaCakeCandles className="text-gray-400 sm:text-lg" />
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-md">
            24 January 2004
          </p>
        </div>

        <div className="flex items-center gap-2">
          <FaCalendarDays className="text-gray-400 sm:text-lg ml-5" />
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-md">
            Joined May 2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;