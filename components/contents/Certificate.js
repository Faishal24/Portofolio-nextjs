"use client";

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
        <div className="object-cover h-full w-full overflow-hidden rounded-lg">
          <Image
            src={src}
            alt={alt}
            className={`border border-gray-900 dark:border-none object-cover h-full w-full relative z-0 rounded-lg transition-all duration-300 hover:scale-110 ${
              isLoading ? "hidden" : "block"
            }`}
            onLoad={() => setIsLoading(false)}
            height={144}
            width={256}
            priority
            unoptimized
          />
        </div>
      </a>
    </div>
  );
};

export default Certificate;
