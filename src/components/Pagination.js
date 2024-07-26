import React from 'react';
import './styles/Pagination.css';

const Pagination = ({ totalNotes, notesPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalNotes / notesPerPage);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          disabled={currentPage === index + 1}
          className="page-button"
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
