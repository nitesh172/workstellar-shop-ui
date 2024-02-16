'use client'
import { VideoFrameProps } from '@/types'
import React from 'react'

const VideoFrame: React.FC<VideoFrameProps> = (props) => {
  const { className, id } = props

  return (
    <div className={`${className ? className : ''}`}>
      <div className="ml-10 flex flex-row gap-2">
        <div className=" h-0.5 w-8 bg-gray-400 rounded-xl"></div>
        <div className=" h-0.5 w-8 bg-gray-400 rounded-xl"></div>
      </div>
      <div id={id} className="flex flex-row gap-0.5">
        <div className="mt-12 h-8 w-0.5 bg-gray-400 rounded-xl"></div>
        <div className="w-full relative shadow-2xl h-auto bg-black rounded-3xl p-2 md:p-3">
          <iframe
            src="https://drive.google.com/file/d/1xPMfnZE-SeAkbdUXWYWMdomBBYJjQkQx/preview"
            width="640"
            height="480"
            title='video-frame'
            style={{ objectFit: 'cover', aspectRatio: 4 / 3 }}
            className="w-full h-full rounded-2xl"
            allow="autoplay"
          >       
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default VideoFrame
