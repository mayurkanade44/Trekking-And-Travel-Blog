import React from "react";
import video from "../media/videos/video-1.mp4";

const Hero = () => {
  return (
    <div>
      <video className="video" src={video} autoPlay loop muted />
      <div className="position-absolute top-50 start-50 translate-middle">
        <h1>ADVENTURE AWAITS</h1>
        <div className="d-flex flex-column align-items-center my-3">
          <h6>What are you waiting for?</h6>
          <button className="btn btn-outline-info btn-lg my-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
