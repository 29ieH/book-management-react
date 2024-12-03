import PropTypes from "prop-types";
const BookCard = (props) => {
  const {
    data: { name, author, yearRelease, imagePath },
  } = props;
  return (
    <div className="relative rounded-lg border border-slate-800">
      <img
        className="h-36 w-full rounded-lg object-cover"
        src={imagePath}
      ></img>
      <div className="relative px-4 py-2">
        <p className="text-w[1.4vw] font-bold">{name}</p>
        <p className="text-w[1vw]">{yearRelease}</p>
        <p className="text-w[1vw]">Author {author?.name}</p>
      </div>
    </div>
  );
};
BookCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    imagePath: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.object,
    yearRelease: PropTypes.number,
  }),
};
export default BookCard;
