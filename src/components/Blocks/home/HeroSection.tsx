'use client'
import dynamic from 'next/dynamic'
import { useEffect, useRef } from 'react'
import VideoFrame from './VideoFrame'
const Button = dynamic(() => import('@/components/Buttons/Button'))

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Error attempting to play', error)
      })
    }
  }, [videoRef])

  return (
    <div className="flex flex-col xl:flex-row gap-8 md:gap-16 lg:gap-20 xl:gap-14 pb-7 md:pb-14">
      <div className="flex flex-col gap-4">
        <div className="font-pacifico text-base md:text-lg lg:text-xl">
          Transform Ideas into Digital Excellence
        </div>
        <div className="text-2xl md:text-3xl lg:text-5xl font-bold lg:leading-[65.37px]">
          Empower Your Vision, Elevate Your Presence: Where Creativity Meets
          Code!
        </div>
        <div className="text-base md:text-lg lg:text-xl">
          Empower your digital vision with top-tier developers and designers.
          Elevate your online presence effortlessly.
        </div>
        <Button text="Let’s talk" dark />
      </div>
      <VideoFrame className="w-full xl:w-[87%] flex flex-col gap-0.5" />
    </div>
  )
}

export default HeroSection
