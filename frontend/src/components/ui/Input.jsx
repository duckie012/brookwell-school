import React from 'react';

const Input = ({ className = '', ...props }) => {
  return (
    <input
      className={`w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${className}`.trim()}
      {...props}
    />
  );
};

export default Input;
