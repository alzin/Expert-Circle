import React from "react";
import ReactPlayer from "react-player";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./VideoCarousel.css";

const YouTubeCarousel = ({ videoIds }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="carousel-video">
      <Carousel responsive={responsive} showDots={true}>
        {videoIds.map((videoId) => (
          <div key={videoId} className="react-player">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              volume={0.1}
              muted
              width="44%"
              playing={true}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default YouTubeCarousel;
