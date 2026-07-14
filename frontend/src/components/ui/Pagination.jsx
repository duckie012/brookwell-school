import React from 'react';

const Pagination = ({ currentPage = 1, totalPages = 1 }) => {
  return <div>Page {currentPage} of {totalPages}</div>;
};

export default Pagination;
