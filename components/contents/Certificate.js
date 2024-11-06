"use client";

import React, { useState } from "react";
import Image from "next/image";
import ImageModal from "../ImageModal";

const Certificate = ({ src, alt, link }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="w-full">
      {isLoading && (
        <div className="animate-pulse">
          <div className="bg-gray-400 dark:bg-gray-200 border border-gray-900 dark:border-none h-36 w-full rounded-md"></div>
        </div>
      )}

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
            onClick={handleImageClick}
          />

          {showModal && (
            <ImageModal src={src} alt={alt} onClose={handleCloseModal} link={link}/>
          )}
        </div>
    </div>
  );
};

export default Certificate;
