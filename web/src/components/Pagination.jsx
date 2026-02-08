export default function Pagination({
  total,
  itemsPerPage,
  currentPage,
  onChange,
}) {
  const totalPages = Math.ceil(total / itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) onChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onChange(currentPage + 1);
  };

  return (
    <div className="flex justify-center gap-2">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
          currentPage === 1
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-white text-primary hover:bg-gold hover:text-white shadow'
        }`}
      >
        ←
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
        const isVisible =
          page === 1 ||
          page === totalPages ||
          (page >= currentPage - 1 && page <= currentPage + 1);

        if (!isVisible) return null;

        return (
          <button
            key={page}
            onClick={() => onChange(page)}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
              page === currentPage
                ? 'bg-primary text-white scale-110 shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
          currentPage === totalPages
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-white text-primary hover:bg-gold hover:text-white shadow'
        }`}
      >
        →
      </button>
    </div>
  );
}
