"use client"

import React, { useState } from "react";
import Tag from "../Tag";
import Image from "next/image";

const Project = ({ title, tech, purpose, feature, url, tag }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="p-4 sm:p-6 gap-2 bg-gray-200 dark:bg-gray-800 rounded-lg ">
      <div className="flex justify-between">
        <h2 className="font-bold text-xl text-gray-800 dark:text-gray-200">{title}</h2>
        <Tag text={tag} />
      </div>

      {isLoading && (
        <div className="w-full h-44 rounded-md my-3 bg-gray-400 dark:bg-gray-200 animate-pulse"></div>
      )}
      <Image
        src={url}
        alt="Project 2"
        className={`w-full h-44 object-cover rounded-md my-3 transition transform hover:scale-105 border-2 border-gray-500 dark:border-none ${isLoading ? "hidden" : "block"}`}
        onLoad={() => setIsLoading(false)}
        height={176}
        width={320}
        priority
      />
      <table className="w-full table-auto border-separate border-spacing-2 border-2 border-gray-500 dark:border-gray-600 rounded-md">
        <tbody className="align-baseline">
          <tr>
            <td className="text-gray-600 dark:text-gray-400">Tech</td>
            <td className="text-gray-900 dark:text-gray-200">{tech}</td>
          </tr>
          <tr>
            <td className="text-gray-600 dark:text-gray-400">Purpose</td>
            <td className="text-gray-900 dark:text-gray-200">{purpose}</td>
          </tr>
          <tr>
            <td className="text-gray-600 dark:text-gray-400">Features</td>
            <td className="text-gray-900 dark:text-gray-200">{feature}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Project;