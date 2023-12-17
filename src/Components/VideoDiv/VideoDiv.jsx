import React from "react";
import video from "../../assets/video.mp4";
import "./VideoDiv.scss";

const VideoDiv = () => {
  return (
    <div className="vid-div">
      <video autoPlay muted loop>
        <source src={video} />
      </video>
    </div>
  );
};

export default VideoDiv;
