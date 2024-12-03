import { useState } from "react";

const Pagination = ({ totalPages = 5, pageCurrent, setPage }) => {
  const [currentPage, setCurrentPage] = useState(pageCurrent || 1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      //   setCurrentPage(page);
      setCurrentPage(page);
      setPage(page);
    }
  };

  return (
    <div className="mt-8 flex items-center justify-center space-x-4">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className={`rounded-lg bg-gray-800 px-4 py-2 text-white shadow-md transition-colors duration-200 hover:bg-gray-700 disabled:opacity-50`}
        disabled={currentPage === 1}
      >
        &laquo; Prev
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={`rounded-lg px-2 py-1 text-lg font-semibold transition-colors duration-200 ${
            currentPage === index + 1
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-blue-200"
          }`}
        >
          {index + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className={`rounded-lg bg-gray-800 px-4 py-2 text-white shadow-md transition-colors duration-200 hover:bg-gray-700 disabled:opacity-50`}
        disabled={currentPage === totalPages}
      >
        Next &raquo;
      </button>
    </div>
  );
};

export default Pagination;
