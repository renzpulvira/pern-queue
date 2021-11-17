import React from "react";
import Youtube from "react-youtube";

export default function PlayingQueue() {
  return (
    <div>
      <Youtube
        videoId="N3AkSS5hXMA"
        opts={{
          height: "340",
          width: "100%",
        }}
      />
    </div>
  );
}
