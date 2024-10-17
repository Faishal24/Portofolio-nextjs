import React from "react";

const Tag = ({ text }) => {
  return (
    <span
      className={`text-sm py-1 px-2 rounded-lg border 
    ${
      text == "Web Mobile"
    ? `bg-sky-200 text-sky-700 border-sky-400 dark:bg-sky-900 dark:text-sky-200 dark:border-sky-600`
    : text == "Mobile"
    ? `bg-green-200 text-green-700 border-green-400 dark:bg-green-900 dark:text-green-200 dark:border-green-600`
    : text == "Web"
    ? `bg-violet-200 text-violet-700 border-violet-400 dark:bg-violet-900 dark:text-violet-200 dark:border-violet-600`
      : `bg-amber-200 text-amber-700 border-amber-400 dark:bg-amber-900 dark:text-amber-200 dark:border-amber-600`
    } 
    `}
    >
      {text}
    </span>
  );
};

export default Tag;