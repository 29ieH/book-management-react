import { useContext, useEffect, useState } from "react";
import { addComment, getCommentsByBook } from "../../services/CommentService";
import PropTypes from "prop-types";
import CommentList from "./CommentList";
import { AuthContext } from "../../context/AuthContext";
const SectionComment = ({ bookId }) => {
  const { user } = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLess, setIsLess] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCommentsByBook(bookId);
        console.log({ data });
        const result = data?.result
          ? isLess
            ? data?.result?.slice(0, 3)
            : data?.result
          : [];
        setComments(result);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [bookId, isLess]);
  const handleReply = async (parentId = null, content) => {
    const data = {
      bookId,
      content,
      parentId,
    };
    const result = await addComment(data);
    if (!result) return;
    const addReply = (comments, parentId, reply) => {
      return comments.map((comment) => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [...comment.replies, reply],
          };
        } else if (comment.replies.length > 0) {
          return {
            ...comment,
            replies: addReply(comment.replies, parentId, reply),
          };
        }
        return comment;
      });
    };
    const newReply = {
      content,
      parentId,
      name: user?.fullName,
      replies: [],
    };
    setComments(addReply(comments, parentId, newReply));
  };

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <div className="bg-black-50 rounded-md p-6 text-white shadow-md">
        <h1 className="mb-8 text-[1.5vw] font-bold">Comments</h1>
        <CommentList comments={comments} handleReply={handleReply} />
      </div>
      <div className="pl-8">
        <p
          className="float-left cursor-pointer font-bold text-indigo-800 hover:text-blue-400"
          onClick={() => setIsLess(!isLess)}
        >
          {isLess ? "Show More" : "Show Less"}
        </p>
      </div>
    </>
  );
};
SectionComment.propTypes = {
  bookId: PropTypes.number, // Validates that bookId is a required number
};
export default SectionComment;
