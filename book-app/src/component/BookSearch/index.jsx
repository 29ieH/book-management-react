import { useEffect, useState } from "react";
import MovieCard from "../MediaList/MovieCard";
import propTypes from "prop-types";
import { getDataSearch } from "../../services/BookService";
import { debounce } from "lodash";
import { Link } from "react-router-dom";
const BookSearch = ({ name, page, size, setTotalPage }) => {
  const [booksData, setBooksData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = debounce(async () => {
      console.log("Call api search");
      setIsLoading(true);
      try {
        const data = await getDataSearch(name, page, size);
        console.log("Data:: ", data);
        const result = data?.result?.content;
        if (result?.length === 0) {
          setBooksData([]);
          setTotalPage(0);
        } else {
          setBooksData(result);
          setTotalPage(data?.result?.totalPages);
        }
      } catch (err) {
        console.error("Error fetching data: ", err);
      } finally {
        setIsLoading(false);
      }
    }, 500);
    fetchData();
  }, [name, page, size, setTotalPage]);
  return (
    <div className="bg-black p-8 text-[1vw] text-white">
      <div className="flex items-center gap-8">
        <ul className="flex items-center rounded-md border border-white"></ul>
      </div>
      <div className="mt-8 grid auto-rows-auto grid-cols-2 gap-6 sm:grid-cols-4 md:grid-cols-6">
        {isLoading ? (
          <p>Loading... </p>
        ) : booksData?.length > 0 ? (
          booksData.map((book) => (
            <Link key={book.id} to={`/book-detail/${book.id}`}>
              <MovieCard data={book}></MovieCard>
            </Link>
          ))
        ) : (
          <p>No data...</p>
        )}
      </div>
    </div>
  );
};
BookSearch.propTypes = {
  size: propTypes.number,
  page: propTypes.number,
  name: propTypes.string,
  setTotalPage: propTypes.func,
};
export default BookSearch;
