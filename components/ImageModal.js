import Image from "next/image";
import React, { useEffect, useRef } from "react";

const ImageModal = ({ src, alt, onClose, link }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
    console.log(link)
  });

  return (
    <dialog ref={modalRef} id="image_modal" className="modal" data-theme={`${localStorage.getItem("theme") == "light" ? "light" : "dark"}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg text-center text-gray-800 dark:text-gray-200 mb-5">{alt}</h3>
        <Image
          src={src}
          alt={alt}
          className={`border border-gray-900 dark:border-none object-cover h-full w-full relative z-0 rounded-lg transition-all duration-300`}
          height={144}
          width={256}
          priority
          unoptimized
        />
        <div className="modal-action">
      <button className="btn btn-error" onClick={onClose}>Close</button>
      <a className={`btn btn-primary ${link == undefined ? "btn-disabled" : ""}`} href={link} target="_blank">Link</a>
    </div>
      </div>
    </dialog>
  );
};

export default ImageModal;
