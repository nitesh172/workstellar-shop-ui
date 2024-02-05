'use client'
import { HttpMethod, TalentProps } from '@/types'
import { useCaller } from '@/utils/API'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
const SubscriptionSection = dynamic(
  () => import('@/components/Blocks/SubscriptionSection')
)

const Resource = ({ params }: { params: { id: string } }) => {
  const { id } = params

  const [talent, setTalent] = useState<TalentProps | null>(null)

  const { execute: fetchResource } = useCaller({
    method: HttpMethod.GET,
    doneCb: (resp: TalentProps) => {
      if (!resp) return
      setTalent(resp)
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
    <div className="py-7 md:py-14 relative">
      <div className="py-7 md:py-14">
        <div className="text-2xl md:text-4xl font-bold mb-11">Resources</div>
        <div className="rounded-2xl border p-5 flex flex-col items-center lg:flex-row gap-8 lg:gap-[5%]">
          <div className="bg-imagebg flex justify-center bg-opacity-20 rounded-[10px] px-3.5 md:px-7 pt-4 md:pt-9">
            <Image
              src="/images/person_1.svg"
              width={224}
              height={270}
              className="w-32 md:w-56 h-[150px] md:h-[224px]"
              alt="person_image"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <div className="flex flex-row gap-2 items-center">
                <div className="text-2xl font-bold mb-1">
                  {talent?.user?.entityName}
                </div>
                <div className="">
                  {talent?.experienceYear} years of experience |{' '}
                  {talent?.designation}
                </div>
              </div>
              <div className="text-grey">
                {talent?.user?.city}, {talent?.user?.country}
              </div>
            </div>
            <div>{talent?.headline}</div>
            <div className="flex flex-col gap-3">
              <div>Skills</div>
              <div className="flex flex-row flex-wrap gap-3">
                {!!talent?.skills?.length &&
                  talent.skills.map((skills, inx) => (
                    <div key={`skills-${inx}`} className="bg-chipColor rounded-[32px] p-5 py-2.5">
                      {skills.name}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <SubscriptionSection />
    </div>
  )
}

export default Resource
