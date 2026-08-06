import React from 'react';

const EmptyState = ({ title, description, action, className = '' }) => {
  return (
    <div className={`rounded-xl border border-dashed border-gray-300 bg-gray-50 px-6 py-10 text-center ${className}`.trim()}>
      {title ? <h3 className="text-lg font-semibold text-gray-900">{title}</h3> : null}
      {description ? <p className="mt-2 text-sm text-gray-600">{description}</p> : null}
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
};

export default EmptyState;
