import propTypes from "prop-types";
const PaginationIndicator = (props) => {
  const { data, idMovieActive, setIdMovieActive } = props;
  console.log("Pagination re-render");
  return (
    <div className="absolute bottom-[10%] right-8">
      <ul className="flex justify-between gap-2">
        {data.map((movie) => (
          <li
            key={movie.id}
            onClick={() => setIdMovieActive(movie.id)}
            className={`h-1 w-10 cursor-pointer rounded ${movie.id === idMovieActive ? "bg-slate-100" : "bg-slate-600"} `}
          ></li>
        ))}
      </ul>
    </div>
  );
};
PaginationIndicator.propTypes = {
  data: propTypes.array,
  idMovieActive: propTypes.number,
  setIdMovieActive: propTypes.func,
};

export default PaginationIndicator;
