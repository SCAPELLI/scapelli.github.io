// components/Projects/ProjectVideo.jsx
import React from "react";
import YouTube from "react-youtube";

const ProjectVideo = ({ videoId }) => {
  const optsMobile = { width: "320", playerVars: { autoplay: 0 } };
  const optsDesktop = { width: "500", playerVars: { autoplay: 0 } };

  return (
    <div className="flex justify-center">
      <div className="md:hidden">
        <YouTube videoId={videoId} opts={optsMobile} />
      </div>
      <div className="hidden md:block">
        <YouTube videoId={videoId} opts={optsDesktop} />
      </div>
    </div>
  );
};

export default ProjectVideo;
