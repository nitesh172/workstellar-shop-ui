'use client'
import { VideoFrameProps } from '@/types'
import React, { useEffect, useRef } from 'react'

const VideoFrame: React.FC<VideoFrameProps> = (props) => {
  const { className } = props
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Error attempting to play', error)
      })
    }
  }, [videoRef])

  return (
    <div className={`${className ? className : ''}`}>
      <div className="ml-10 flex flex-row gap-2">
        <div className=" h-0.5 w-8 bg-gray-400 rounded-xl"></div>
        <div className=" h-0.5 w-8 bg-gray-400 rounded-xl"></div>
      </div>
      <div className="flex flex-row gap-0.5">
        <div className="mt-12 h-8 w-0.5 bg-gray-400 rounded-xl"></div>
        <div className="w-full shadow-2xl h-auto bg-black rounded-3xl p-2 md:p-3">
          <video
            ref={videoRef}
            playsInline
            loop
            autoPlay
            muted
            style={{ objectFit: 'cover', aspectRatio: 4 / 3 }}
            className="w-full h-full rounded-2xl"
          >
            <source src="/videos/video_1.mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}

export default VideoFrame
