export const dynamic = 'force-static'
export const dynamicParams = false
export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}
import CheckBox from '@/components/Input/CheckBox'
import Image from 'next/image'
import React from 'react'

const Resource = ({ params }: { params: { id: string } }) => {
  const { id } = params
  
  return (
    <div className="py-7 md:py-14">
      <div className="text-2xl md:text-4xl font-bold mb-11">Resources</div>
      <div className="py-5 flex flex-col items-center lg:flex-row gap-8 lg:gap-[5%]">
        <div className="rounded-xl w-full md:w-fit border p-3 md:p-5 flex gap-3 md:gap-6 flex-col">
          <div className="bg-imagebg flex justify-center bg-opacity-20 rounded-[10px] px-3.5 md:px-7 pt-4 md:pt-9">
            <Image
              src="/images/person_1.svg"
              width={224}
              height={270}
              className="w-32 md:w-56 h-[150px] md:h-[224px]"
              alt="person_image"
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <div>
              <div className="text-base md:text-xl font-medium text-black">
                Floyd Miles
              </div>
              <div className="text-sm font-medium text-grey">Developer</div>
            </div>
            <Image
              src="/images/redirect.svg"
              alt="redirect"
              className="absolute md:static top-4 right-4 w-4 h-4 md:h-6 md:w-6"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-2xl md:text-4xl font-bold">Developer</div>
          <div className="text-lg md:text-2xl">Lorem ipsum doret dexit</div>
          <div className="flex flex-col gap-3">
            <CheckBox
              id="checkn"
              label="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to"
            />
            <CheckBox
              id="checkn"
              label="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to"
            />
            <CheckBox
              id="checkn"
              label="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resource
