import { useEffect, useState } from "react";
import MovieCard from "../MediaList/MovieCard";
import { getBooksByUrl } from "../../services/MovieList";
import { CategoryBooks } from "../../libs/constant";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
const MovieList = ({ title, categoryId, id }) => {
  const [booksData, setBooksData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true); // Bắt đầu loading khi gọi API
      try {
        console.log({ categoryId });
        const url =
          CategoryBooks.find((tab) => tab.id == categoryId)?.url ??
          CategoryBooks[0].url;
        console.log("Url:: " + url);
        const data = await getBooksByUrl(url);
        console.log("Data:: ", data);
        const dataFilter = data?.result
          ? data?.result.filter((book) => book.id != id)
          : [];
        console.log("Data Filter:: ", dataFilter);
        setBooksData(dataFilter);
      } catch (err) {
        console.error("Error fetching data: ", err);
      } finally {
        setIsLoading(false); // Kết thúc loading khi API hoàn thành
      }
    };
    fetchData();
  }, [categoryId, id]);
  return (
    <div className="bg-black p-8 text-[1vw] text-white">
      <div className="flex items-center gap-8">
        <p className="text-[1.5vw] font-bold">{title}</p>
        <ul className="flex items-center rounded-md border border-white">
          {/* <li className="rounded-md bg-white px-4 py-2 text-black">All</li>
          <li className="rounded-md px-4 py-2">Movie</li>
          <li className="rounded-md px-4 py-2">Tv Shows</li> */}
        </ul>
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
MovieList.propTypes = {
  id: propTypes.number,
  categoryId: propTypes.number,
  title: propTypes.string,
};
export default MovieList;
