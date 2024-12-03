import { useState } from "react";

const Comment = ({ comment, handleReply }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState("");
  const [isExpanded, setIsExpanded] = useState(false); // Trạng thái ẩn/hiện bình luận con
  const submitReply = () => {
    if (!replyContent.trim()) return;
    handleReply(comment.id, replyContent);
    setReplyContent("");
    setIsReplying(false);
  };
  return (
    <div
      className={`ml-${comment.parentId ? 8 : 0} ${
        comment.parentId ? "border-gray-200" : ""
      } pl-4`}
    >
      <div className="rounded-md bg-gray-300 p-2 shadow-sm">
        <p className="text-gray-700">
          <strong className="text-gray-900">{comment.name}: </strong>{" "}
          {comment.content}
        </p>
        <div className="space-x-2">
          <button
            onClick={() => setIsReplying(!isReplying)}
            className="text-sm font-bold text-indigo-800 hover:underline"
          >
            Reply
          </button>
          {comment.replies.length > 0 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm text-gray-500 hover:underline"
            >
              {isExpanded ? (
                <p>Hide Replies</p>
              ) : (
                <p className="hover:font-bold">{`Show Replies (${comment.replies.length})`}</p>
              )}
            </button>
          )}
        </div>

        {isReplying && (
          <div className="mt-4 space-y-2">
            <textarea
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              placeholder="Write your reply..."
              className="w-full rounded-md border border-gray-300 p-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={submitReply}
              className="rounded-md bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-950"
            >
              Submit
            </button>
          </div>
        )}
      </div>

      {/* Hiển thị bình luận con khi isExpanded = true */}
      {isExpanded && comment.replies.length > 0 && (
        <div className="mt-4">
          {comment.replies.map((reply) => (
            <div key={reply.id} className="mb-1">
              <Comment comment={reply} handleReply={handleReply} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
