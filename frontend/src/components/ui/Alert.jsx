import React from 'react';

const Alert = ({ children, type = 'info' }) => {
  return <div role="alert">{children}</div>;
};

export default Alert;
