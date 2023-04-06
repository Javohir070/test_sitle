import React from "react";
import { Container } from "./style";
import Youtube from "react-youtube";

const VideoComponent = ({ id, width, height }) => {
  const opts = {
    height: window.innerWidth < width ? 250 : height,
    width: window.innerWidth < width ? "100%" : width,
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Container>
      <Youtube videoId={id} opts={opts} />
    </Container>
  );
};

export default VideoComponent;
