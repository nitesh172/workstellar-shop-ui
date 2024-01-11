'use client'
import { VideoFrameProps } from '@/types'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const VideoFrame: React.FC<VideoFrameProps> = (props) => {
  const { className, id, autoplay = false } = props
  const videoRef = useRef<HTMLVideoElement>(null)

  const [play, setPlay] = useState<boolean>(autoplay)

  useEffect(() => {
    if (videoRef && videoRef.current && play) {
      videoRef.current.play().catch((error) => {
        console.error('Error attempting to play', error)
      })
    } else if (videoRef && videoRef.current && !play) {
      videoRef.current.pause()
    }
  }, [videoRef, play])

  return (
    <div className={`${className ? className : ''}`}>
      <div className="ml-10 flex flex-row gap-2">
        <div className=" h-0.5 w-8 bg-gray-400 rounded-xl"></div>
        <div className=" h-0.5 w-8 bg-gray-400 rounded-xl"></div>
      </div>
      <div id={id} className="flex flex-row gap-0.5">
        <div className="mt-12 h-8 w-0.5 bg-gray-400 rounded-xl"></div>
        <div
          onClick={() => setPlay(!play)}
          className="w-full relative shadow-2xl h-auto bg-black rounded-3xl p-2 md:p-3"
        >
          <video
            ref={videoRef}
            playsInline={autoplay}
            loop={autoplay}
            autoPlay={autoplay}
            muted={autoplay}
            style={{ objectFit: 'cover', aspectRatio: 4 / 3 }}
            className="w-full h-full rounded-2xl"
          >
            <source src="/videos/video_1.mp4" />
          </video>
          {!autoplay && !play && (
            <Image
            src="/images/play.svg"
            alt=""
            width={17}
            height={17}
            className="absolute top-5 min-[375px]:top-8 min-[425px]:top-10 md:top-16 lg:top-24 xl:top-20 min-[1920px]:top-24 left-4 min-[375px]:left-6 min-[425px]:left-8 md:left-10 xl:left-14 min-[1920px]:left-20 bottom-0 right-0 w-28 min-[375px]:w-32 min-[425px]:w-36 md:w-64 lg:w-96 xl:w-64 min-[1920px]:w-[400px]"
          />
          )}
        </div>
      </div>
    </div>
  )
}

export default VideoFrame
