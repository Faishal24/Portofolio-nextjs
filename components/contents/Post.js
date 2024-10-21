"use client"

import React, { useState } from "react";
import Image from "next/image";

const Post = ({ date, caption, image }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="p-3 sm:p-5 sm:flex gap-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg">
      <div className="flex gap-2 items-center sm:hidden mb-1">
        {isLoading && (
          <div className="h-14 w-14 rounded-full bg-gray-200 border-4 dark:border-gray-900"></div>
        )}
        <Image
          src="/avatar.jpg"
          alt="avatar"
          className={`${isLoading ? "hidden" : "block sm:flex"} w-14 h-14 hidden rounded-full border-4 dark:border-gray-900`}
          onLoad={() => setIsLoading(false)}
          style={{ display: isLoading ? "none" : "block" }}
          height={56}
          width={56}
          priority
          unoptimized
        />
        <div className="flex-col gap-1 items-center sm:hidden">
          <p className="text-gray-800 dark:text-gray-200 font-semibold">
            Faishal Hakim
          </p>
          <p className="text-gray-400 text-sm">{date}</p>
        </div>
      </div>

      {isLoading && (
        <div className="h-14 min-w-14 rounded-full bg-gray-200 border-4 dark:border-gray-900"></div>
      )}
      <Image
        src="/avatar.jpg"
        alt="avatar"
        className={`${isLoading ? "hidden" : "block sm:flex"} w-14 h-14 hidden rounded-full border-4 dark:border-gray-900`}
        onLoad={() => setIsLoading(false)}
        height={56}
        width={56}
        unoptimized
        priority
      />

      <div>
        {/* Detail */}
        <div className="sm:flex gap-1 items-center hidden">
          <p className="text-gray-800 dark:text-gray-200 font-semibold">
            Faishal Hakim
          </p>
          <span className="text-gray-600 dark:text-gray-400 text-sm">•</span>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{date}</p>
        </div>

        {/* Content */}
        <p className="text-gray-800 dark:text-gray-200 text-justify">
          {caption}
        </p>

        {/* Image */}
        {isLoading && (
          <div className="animate-pulse">
            <div className="w-full h-64 bg-gray-200 rounded-lg mt-2"></div>
          </div>
        )}
        <Image
          src={image}
          alt="post"
          className={`w-full object-cover rounded-lg mt-2 ${isLoading ? "hidden" : "block"}`}
          onLoad={() => setIsLoading(false)}
          height={256}
          width={256}
          unoptimized
        />
      </div>
    </div>
  );
};

export default Post;
