"use client"

import React, { useState } from "react";
import Image from "next/image";

const Certificate = ({ src, alt, link }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="w-full">
      {isLoading && (
        <div className="animate-pulse">
          <div className="bg-gray-400 dark:bg-gray-200 border border-gray-900 dark:border-none h-36 w-full rounded-md"></div>
        </div>
      )}

      <a href={link}>
        <Image
          src={src}
          alt={alt}
          className={`border border-gray-900 dark:border-none object-cover h-full w-full rounded-md transition transform hover:scale-105 ${
            isLoading ? "hidden" : "block"
          }`}
          onLoad={() => setIsLoading(false)}
          height={144}
          width={256}
          priority
          unoptimized
        />
      </a>
    </div>
  );
};

export default Certificate;
