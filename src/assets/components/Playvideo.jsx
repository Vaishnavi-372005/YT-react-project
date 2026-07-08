import React from "react";

const PlayVideo = ({ video }) => {
  return (
    <>
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${video.id}`}
        title={video.snippet.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <h2>{video.snippet.title}</h2>

      <h4>{video.snippet.channelTitle}</h4>
    </>
  );
};

export default PlayVideo;