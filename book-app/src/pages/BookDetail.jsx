import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../services/MovieList";
import RelatedBook from "../component/RelatedBook";
import SectionComment from "../component/Comment";
const BookDetail = () => {
  const { id } = useParams();
  console.log("Id:: ", id);
  const [bookDetail, setBookDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      console.log("Detail Books");
      try {
        const data = await getBookById(id);
        console.log("Data:: ", data.result);
        setBookDetail(data?.result);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);
  const author = bookDetail?.author;
  const category = bookDetail?.categories;
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <div className="bg-black text-white">
        <div className="flex flex-col gap-6 p-4 md:flex-row">
          {/* Left side: Book image, name, year release */}
          <div className="mx-auto max-w-md flex-1">
            <img
              className="h-auto w-full rounded-lg object-cover shadow-lg"
              src={`${bookDetail?.imagePath}`}
            />
            <div className="mt-4 text-center">
              <p className="text-2xl font-bold">{bookDetail?.name}</p>
              <p className="mt-2 text-lg text-gray-500">
                {bookDetail?.description}
              </p>
              <p className="mt-2 text-lg text-gray-600">
                Release: {bookDetail?.yearRelease}
              </p>
            </div>
          </div>

          {/* Right side: Author, genre, publisher, description */}
          <div className="mx-auto max-w-md flex-1">
            <div className="mb-4">
              <p className="text-xl font-semibold">Author</p>
              <p className="text-lg">Name: {author.name}</p>
            </div>
            <div className="mb-4">
              <p className="text-xl font-semibold">Description</p>
              <p className="text-lg">{author.description}</p>
            </div>
          </div>
        </div>
        <SectionComment bookId={bookDetail.id} />
      </div>
      <RelatedBook
        title={`Books related`}
        categoryId={category[0]?.id}
        id={bookDetail.id}
      />
    </>
  );
};

export default BookDetail;
