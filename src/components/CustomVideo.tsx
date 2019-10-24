import * as React from 'react';
import ReactPlayer from 'react-player'

export interface VideoProps {
  /** The id of the YouTube video. */
  videoId: string
}

export default function CustomVideo(props: VideoProps) {
  return <div style={{
    margin: "0px 0px 25px 0px",
  }}>
    <ReactPlayer width="100%" url={`https://youtube.com/watch?v=${props.videoId}`} />
  </div>
}