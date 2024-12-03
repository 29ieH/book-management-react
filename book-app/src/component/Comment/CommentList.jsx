import Comment from "./Comment";

const CommentList = ({ comments, handleReply }) => {
  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} handleReply={handleReply} />
      ))}
    </div>
  );
};

export default CommentList;
