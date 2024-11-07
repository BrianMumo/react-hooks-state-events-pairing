import React, { useState } from "react";
import Comment from "./Comment";

function CommentSection({ comments }) {
  const [showComments, setShowComments] = useState(true);

  return (
    <div>
      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {showComments &&
        comments.map((comment) => (
          <Comment key={comment.id} user={comment.user} comment={comment.comment} />
        ))}
    </div>
  );
}

export default CommentSection;
