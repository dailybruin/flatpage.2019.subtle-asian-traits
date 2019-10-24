import * as React from 'react';
import { Video } from '@dailybruin/lux';

export interface VideoProps {
  /** The id of the YouTube video. */
  videoId: string
}

export default function CustomVideo(props: VideoProps) {
  console.log("Video " + props.videoId)
  return <div style={{
    margin: "0px 0px 25px 0px",
  }}>
    <Video videoId={props.videoId} />
  </div>

}