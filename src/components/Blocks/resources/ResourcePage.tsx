'use client'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import toast from 'react-hot-toast'
import { useCaller } from '@/utils/API'
import { HttpMethod, TalentProps } from '@/types'
import React, { useEffect, useState } from 'react'
import { useAppContext } from '@/context/AppContext'
import { useRouter } from 'next/navigation'
const LottieAnimation = dynamic(() => import('../LottieAnimation'))

const ResourcePage: React.FC<{ id: string }> = (props) => {
  const { id } = props

  const { translate } = useAppContext()

  const router = useRouter()

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
  }, [id])
  return (
    <div className="">
      <div className="flex flex-row gap-1 items-center mb-11">
        <Image
          src="/images/arrow-left.svg"
          alt=""
          className="cursor-pointer"
          onClick={() => router.back()}
          width={32}
          height={32}
        />
        <div className="text-2xl md:text-4xl font-bold">
          {translate('_RESOURCES_', 'Resources')}
        </div>
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
          <div className="flex flex-1 flex-col gap-4">
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
                {talent?.user?.city &&
                  talent?.user?.city !== 'NA' &&
                  `${talent?.user?.city}, `}
                {talent?.user?.country}
              </div>
            </div>
            <div className="text-sm md:text-base">{talent?.headline}</div>
            <div className="flex flex-col gap-3">
              <div className="text-sm md:text-base font-medium">
                {translate('_SKILLS_', 'Skills')}
              </div>
              <div className="flex flex-row flex-wrap gap-x-10 gap-y-4 w-full">
                {!!talent?.skills?.length &&
                  talent.skills.map((skill, inx) => (
                    <div key={inx} className="flex flex-col gap-1">
                      <div className="text-sm ms:text-base">{skill.name}</div>
                      <div className="flex flex-row gap-2 items-center">
                        <div className="w-[200px] h-2.5 bg-[#F6F6F8]">
                          <div
                            className={`h-full bg-[#6EA6E8]`}
                            style={{ width: skill.rating * 20 }}
                          ></div>
                        </div>
                        <div className="text-sm ms:text-base">
                          {skill.rating}
                        </div>
                      </div>
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
