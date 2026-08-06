import React from 'react';

const SectionTitle = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`mb-6 ${className}`.trim()}>
      <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
      {subtitle ? <p className="mt-2 text-sm text-gray-600">{subtitle}</p> : null}
    </div>
  );
};

export default SectionTitle;
