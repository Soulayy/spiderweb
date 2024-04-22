import React from 'react';
import Vs from "./../../assets/video/orionzeap.mp4"

const BackgroundVideo = () => {
  return (
    <video autoPlay loop muted id='background-video' className="absolute top-0 left-0 w-full h-full object-cover z-0">
      <source src={Vs} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;