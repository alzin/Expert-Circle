import React from "react";
// import YouTube from "react-youtube";

import VideoCarousel from "../VideoCraousel/VideoCraousel";

const YoutubeVideo = ({ video }) => {
  const { snippet, id } = video;
  return (
    <div>
      <h2>{snippet.title}</h2>
      <div>
        <VideoCarousel videoIds={id.videoId} />
      </div>
    </div>
  );
};

export default YoutubeVideo;
