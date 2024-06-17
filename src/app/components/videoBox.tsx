import React from "react";

type props = {
  src: string;
};
function VideoBox(pro: props) {
  return (
    <video
      autoPlay
      loop
      muted
      className="rounded-lg w-1/2 border border-orange-700
      shadow-orange-400 mx-2 my-4"
    >
      <source src={pro.src} />
      Your browser does not support the video type
    </video>
  );
}

export default VideoBox;
