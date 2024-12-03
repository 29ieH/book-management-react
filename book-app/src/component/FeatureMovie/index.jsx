import { useEffect, useState } from "react";
import Movie from "./Movie";
import PaginationIndicator from "./PaginationIndicator";
import { getBookPopular } from "../../services/FeatureMovieService";
import { useSlider } from "../../hooks/useSlider";
const FeatureMovie = () => {
  console.log("Feature Movie re-render");
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [idBookActive, setIdBookActive] = useState();
  useEffect(
    () => async () => {
      try {
        const data = await getBookPopular();
        let booksPopular = data.result.slice(0, 4);
        console.log("Book popular", booksPopular);
        setBooks(booksPopular);
        setIdBookActive(booksPopular[0].id);
      } catch (e) {
        console.log({ e });
        return <p>Something Error, Pls try Again</p>;
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );
  const currentIndex = useSlider(books);
  useEffect(() => {
    if (books.length > 0) {
      setIdBookActive(books[currentIndex]?.id); // Cập nhật idMovieActive
    }
  }, [currentIndex, books]);
  return (
    <div className="relative">
      {isLoading ? (
        <p>Loading .... </p>
      ) : books.length > 0 ? (
        books
          .filter((m) => m.id === idBookActive)
          .map((book) => <Movie key={book.id} data={book}></Movie>)
      ) : (
        <p>Không có data...</p>
      )}
      <PaginationIndicator
        data={books}
        idMovieActive={idBookActive}
        setIdMovieActive={setIdBookActive}
      ></PaginationIndicator>
    </div>
  );
};

export default FeatureMovie;
