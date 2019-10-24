import * as React from 'react'
import ReactPlayer from 'react-player'
import {Video} from '@dailybruin/lux'
// tslint:disable-next-line
import 'plyr/dist/plyr.css'

export interface VideoProps {
  /** The id of the YouTube video. */
  videoId: string
}

export default function CustomVideo(props: VideoProps) {
  return <div style={{
            margin: "0px 0px 25px 0px",
          }}>
            {/* <ReactPlayer width="100%" url={'https://www.youtube.com/watch?v=' + props.videoId} controls/> */}
            <Video videoId={props.videoId}/>
          </div>
          
}