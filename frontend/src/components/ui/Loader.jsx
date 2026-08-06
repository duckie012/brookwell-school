import React from 'react';

const Loader = ({ className = '', text = 'Loading...' }) => {
  return (
    <div className={`flex items-center justify-center gap-3 py-6 ${className}`.trim()}>
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
      <span className="text-sm text-gray-600">{text}</span>
    </div>
  );
};

export default Loader;
