import React from 'react';

const Card = ({ children, className = '', as: Component = 'div', ...props }) => {
  return (
    <Component className={`rounded-xl border border-gray-200 bg-white shadow-sm ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
};

export default Card;
