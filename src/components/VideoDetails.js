import React, { useState } from "react";

function VideoDetails({ title, views, createdAt }) {
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);

  return (
    <div>
      <h1>{title}</h1>
      <p>{views} views | Uploaded {createdAt}</p>
      <button onClick={() => setUpvotes(upvotes + 1)}>👍 {upvotes}</button>
      <button onClick={() => setDownvotes(downvotes + 1)}>👎 {downvotes}</button>
    </div>
  );
}

export default VideoDetails;
