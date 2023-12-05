"use client"

import React from "react";

const MyModal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black bg-opacity-40" onClick={onClose} />
          {children}
      </div>}
    </>
  );
}

export default MyModal;
