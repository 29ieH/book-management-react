import { useState } from "react";
import BookSearch from "../BookSearch";
import Pagination from "../Pagination";

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [totalPage, setTotalPage] = useState(0);
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);
  };
  return (
    <div className="h-[1024px] bg-black px-8 text-white">
      <div className="mx-auto max-w-md">
        {/* Input search */}
        <div className="relative top-3">
          <input
            type="text"
            placeholder="Enter name book..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
      <p className="text-[1.2vw] font-bold">Result</p>
      <BookSearch
        name={searchTerm}
        page={page}
        size={size}
        setTotalPage={setTotalPage}
      />
      <div className="flex items-center justify-center">
        {totalPage > 0 && (
          <Pagination
            totalPages={totalPage}
            pageCurrent={page}
            setPage={setPage}
          />
        )}
      </div>
    </div>
  );
};

export default SearchSection;
