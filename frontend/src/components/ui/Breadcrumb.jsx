import React from 'react';

const Breadcrumb = ({ items = [] }) => {
  return (
    <nav aria-label="breadcrumb">
      {items.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
