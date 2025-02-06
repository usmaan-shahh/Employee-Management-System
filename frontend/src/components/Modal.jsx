import React from "react";

const Modal = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-sm w-full border border-gray-300">
        <h2 className="text-lg font-semibold text-center mb-4">{message}</h2>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
