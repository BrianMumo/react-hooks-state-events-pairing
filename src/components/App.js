import React from "react";
import video from "../data/video.js";
import VideoDetails from "./VideoDetails";
import CommentSection from "./CommentSection";

function App() {
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <VideoDetails
        title={video.title}
        views={video.views}
        createdAt={video.createdAt}
      />
      <CommentSection comments={video.comments} />
    </div>
  );
}

export default App;
