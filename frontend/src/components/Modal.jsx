import React from "react";

const Modal = ({ message, onClose }) => {
  if (!message) return null;

  // Determine if it's a success or error message
  const isSuccess = message.toLowerCase().includes("success");
  const iconColor = isSuccess
    ? "bg-green-100 text-green-600"
    : "bg-red-100 text-red-600";

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 animate-fade-in">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full mx-4 animate-scale-in">
        <div className="flex flex-col items-center space-y-4">
          {/* Animated status icon */}
          <div
            className={`${iconColor} rounded-full p-4 flex items-center justify-center`}
          >
            {isSuccess ? (
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            )}
          </div>

          {/* Content */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              {isSuccess ? "Success!" : "Oops!"}
            </h2>
            <p className="text-gray-600 text-lg font-medium">{message}</p>
          </div>

          {/* Action button */}
          <button
            onClick={onClose}
            className={`${
              isSuccess
                ? "bg-green-600 hover:bg-green-700"
                : "bg-red-600 hover:bg-red-700"
            } text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isSuccess ? "focus:ring-green-500" : "focus:ring-red-500"
            }`}
          >
            {isSuccess ? "Continue" : "Try Again"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
