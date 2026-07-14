import React from 'react';

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div role="dialog" aria-modal="true">
      <div>{children}</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Modal;
