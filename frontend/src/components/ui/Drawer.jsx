import React from 'react';

const Drawer = ({ children, isOpen }) => {
  if (!isOpen) return null;

  return <div>{children}</div>;
};

export default Drawer;
