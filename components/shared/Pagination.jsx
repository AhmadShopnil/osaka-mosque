'use client';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const createPageRange = () => {
    const range = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) range.push(i);
    } else {
      if (currentPage <= 3) {
        range.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        range.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        range.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return range;
  };

  const pageItems = createPageRange();

  const handlePageChange = (page) => {
    if (page !== '...' && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className="py-[50px]">
      <ul className="flex flex-wrap justify-center items-center gap-2">
        <li>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-white hover:bg-[#00401A] text-gray-600 hover:text-white transition px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-md text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaAngleLeft />
          </button>
        </li>

        {pageItems.map((page, idx) => (
          <li key={idx}>
            <button
              onClick={() => handlePageChange(page)}
              className={`${
                page === currentPage
                  ? 'bg-[#00401A] text-white'
                  : 'bg-white text-gray-600 hover:bg-[#00401A] hover:text-white'
              } transition px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-md text-sm sm:text-base`}
              disabled={page === '...'}
            >
              {page}
            </button>
          </li>
        ))}

        <li>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-white hover:bg-[#00401A] text-gray-600 hover:text-white transition px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-md text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaAngleRight />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
