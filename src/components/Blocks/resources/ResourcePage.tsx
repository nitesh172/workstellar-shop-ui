'use client'
import { useAppContext } from '@/context/AppContext'
import { HttpMethod, TalentProps } from '@/types'
import { useCaller } from '@/utils/API'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import LottieAnimation from '../LottieAnimation'

const ResourcePage: React.FC<{ id: string }> = (props) => {
  const { id } = props

  const { translate } = useAppContext()

  const [talent, setTalent] = useState<TalentProps | null>(null)
  const [loading, setloading] = useState<boolean>(true)

  const { execute: fetchResource } = useCaller({
    method: HttpMethod.GET,
    doneCb: (resp: TalentProps) => {
      if (!resp) return
      setTalent(resp)
      setloading(false)
    },
    errorCb: (failed: any) => {
      toast.error(failed)
    },
  })

  useEffect(() => {
    if (id) {
      fetchResource(`talents/${id}`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  return (
    <div className="">
      <div className="text-2xl md:text-4xl font-bold mb-11">
        {translate('_RESOURCES_', 'Resources')}
      </div>
      {!!loading && !talent ? (
        <div className="flex flex-col items-center justify-center h-[300px] w-full">
          <LottieAnimation />
        </div>
      ) : (
        <div className="rounded-2xl border p-5 flex flex-col lg:items-center lg:flex-row gap-8 lg:gap-[5%]">
          <div className="bg-imagebg flex justify-center bg-opacity-20 rounded-[10px] pt-4 md:pt-9">
            <Image
              src={`/images/${talent?.avatar}.png`}
              width={1200}
              height={800}
              className="w-36 md:w-56 h-[150px] md:h-[224px]"
              alt="person_image"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row gap-2 md:items-center">
                <div className="text-lg md:text-2xl font-bold mb-1">
                  {talent?.user?.entityName}
                </div>
                <div className="flex text-sm md:text-base flex-col gap-2">
                  {talent?.experienceYear} years of experience |{' '}
                  {talent?.designation}
                </div>
              </div>
              <div className="text-xs md:text-base text-grey">
                {talent?.user?.city}, {talent?.user?.country}
              </div>
            </div>
            <div className="text-sm md:text-base">{talent?.headline}</div>
            <div className="flex flex-col gap-3">
              <div className="text-sm md:text-base font-medium">{translate('_SKILLS_', 'Skills')}</div>
              <div className="flex flex-row flex-wrap gap-3">
                {!!talent?.skills?.length &&
                  talent.skills.map((skills, inx) => (
                    <div
                      key={`skills-${inx}`}
                      className="bg-chipColor text-xs ms:text-sm rounded-[32px] p-5 py-2.5"
                    >
                      {skills.name}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ResourcePage
