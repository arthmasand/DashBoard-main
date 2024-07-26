// GoogleSlide.js
import React from "react";
import './GoogleSlide.css';

const GoogleSlide = () => {
  return (
    <div className="slide-container">
      <iframe
        src="https://docs.google.com/presentation/d/1Sm1EnwbUc9yPwa96ZQPzowBMoq3d8UMFbEVRhOiAvIw/edit?usp=sharing"
        className="slide"
        title="Google Slide Presentation"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleSlide;  