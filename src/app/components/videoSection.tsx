import React from "react";
import VideoBox from "./videoBox";

function VideoSection() {
  return (
    <div className="mt-10 flex justify-center xl:px-48 lg:px-12 md:mx-8 mx-4">
      <VideoBox src="/assets/videos/video1.mp4" />
      <VideoBox src="/assets/videos/video2.mp4" />
    </div>
  );
}

export default VideoSection;
