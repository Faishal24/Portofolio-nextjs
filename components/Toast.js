"use client";

import { useEffect } from "react";

const Toast = ({ show, message, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div className={`toast toast-end ${show ? "block" : "hidden"}`}>
      <div className="alert alert-info">
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
