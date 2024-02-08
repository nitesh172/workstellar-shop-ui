'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { useAppContext } from '@/context/AppContext'
import { TalentProps } from '@/types'
import animationData from '../../../../public/loader/Loader.json'
import Lottie from 'lottie-react'
const Carousel = dynamic(() => import('@/components/Carousel'))

const ResourceSection = () => {
  const router = useRouter()

  const { homeTalents, loading, translate } = useAppContext()

  return (
    <div id="Resources" className="py-7 md:py-14">
      <div className="text-center text-xl md:text-4xl text-black font-bold mb-11">
        {translate('_RESOURCES_', 'Resources')}
      </div>
      {!!homeTalents && !!homeTalents.length ? (
        <Carousel
          data={homeTalents}
          renderItem={(talent: TalentProps, i, isSnapPoint) => (
            <div
              key={i}
              className={`flex-shrink-0 ${
                isSnapPoint && 'snap-start'
              } w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col pl-2 pr-2 gap-2`}
            >
              <div
                key={talent.id}
                className={`rounded-xl relative border p-3 md:p-5 flex gap-3 md:gap-6 ${
                  i % 2 === 0 ? 'flex-col' : 'flex-col md:flex-col-reverse'
                }`}
              >
                <div className="bg-imagebg flex justify-center bg-opacity-20 rounded-[10px] px-3.5 md:px-7 pt-4 md:pt-9">
                  <Image
                    src={`/images/${talent.avatar}.svg`}
                    width={224}
                    height={270}
                    loading="lazy"
                    className="w-32 md:w-56 h-[150px] md:h-[224px]"
                    alt="person_image"
                  />
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div>
                    <div className="text-base md:text-xl font-medium text-black">
                      {talent.user.entityName}
                    </div>
                    <div className="text-sm font-medium text-grey">
                      {talent.designation}
                    </div>
                  </div>
                  <Image
                    src="images/redirect.svg"
                    alt="redirect"
                    loading="lazy"
                    onClick={() => router.push(`/resources/${talent.id}`)}
                    className="absolute md:static cursor-pointer top-4 right-4 w-4 h-4 md:h-6 md:w-6"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
          )}
        />
      ) : !!loading ? (
        <div className="flex flex-col items-center justify-center">
          <Lottie animationData={animationData} className="w-40" />
        </div>
      ) : (
        <div>{translate('_NO_RESOURCES_', 'No Resources')}</div>
      )}
    </div>
  )
}

export default ResourceSection
