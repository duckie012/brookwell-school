import React from 'react';

const Modal = ({ isOpen, onClose, children, title, className = '' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className={`w-full max-w-lg rounded-xl bg-white p-6 shadow-xl ${className}`.trim()}>
        <div className="mb-4 flex items-center justify-between">
          {title ? <h3 className="text-lg font-semibold text-gray-900">{title}</h3> : <div />}
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
