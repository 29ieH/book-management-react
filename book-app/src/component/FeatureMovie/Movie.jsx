import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const Movie = (props) => {
  const {
    data: { id, name, description, yearRelease, imagePath },
  } = props;
  const navigate = useNavigate();
  const handleClick = (idActive) => {
    navigate(`/book-detail/${idActive}`);
  };
  return (
    <>
      <img className="aspect-video w-full brightness-50" src={imagePath} />
      <div className="absolute bottom-[30%] left-8 w-1/3 text-white">
        <p className="mb-1 text-lg font-bold md:text-[2vw]">{name}</p>
        <div>
          <p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
            PG13
          </p>
          <p className="mb-3 text-[1vw]">Release: {yearRelease}</p>
        </div>
        <div className="hidden text-[1.2vw] md:block">
          <p className="font-bold text-[1wh]">Over view</p>
          <p>{description}</p>
        </div>
        <div className="mt-4">
          <button
            className="rounded bg-slate-300/35 px-4 py-2 text-[10px] lg:text-lg"
            onClick={() => handleClick(id)}
          >
            View Detail
          </button>
        </div>
      </div>
    </>
  );
};
Movie.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    imagePath: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    yearRelease: PropTypes.number,
  }),
};

export default Movie;
