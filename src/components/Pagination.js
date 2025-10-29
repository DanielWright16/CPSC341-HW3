
import React from "react";
import "../index.css";
export default function Pagination({ page, totalPages, onPageChange }) {
  return (
    <div className="pagination">
      <button
        className="pg-btn"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>
      <span>Page {page} of {totalPages}</span>
      <button
        className="pg-btn"
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
      >
        Next
      </button>
    </div>
  );
}

