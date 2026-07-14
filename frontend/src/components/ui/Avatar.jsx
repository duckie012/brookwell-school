import React from 'react';

const Avatar = ({ src, alt = 'Avatar', name }) => {
  return <img src={src} alt={alt || name} />;
};

export default Avatar;
