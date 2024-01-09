import SubscriptionSection from '@/components/Blocks/SubscriptionSection'
import TextField from '@/components/Input/TextField'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Resources = () => {
  const router = useRouter()
  const persons = [
    {
      id: 0,
      name: 'Floyd Miles',
      role: 'Developer',
      images: '/images/person_1.svg',
    },
    {
      id: 1,
      name: 'Rachel McDermott',
      role: 'Mechanical Engineering',
      images: '/images/person_2.svg',
    },
    {
      id: 2,
      name: 'Jenny Wilson',
      role: 'DevOps',
      images: '/images/person_3.svg',
    },
    {
      id: 3,
      name: 'Rachel McDermott',
      role: 'Mechanical Engineering',
      images: '/images/person_4.svg',
    },
  ]

  return (
    <div className="py-7 md:py-14">
      <div className="text-2xl md:text-4xl font-bold mb-11">Resources</div>
      <div className="flex flex-col lg:flex-row justify-between mb-9">
        <TextField label="Search" placeholder="Search" className="w-80" />
        <div className="hidden lg:flex flex-row gap-10 items-center">
          <div className="flex flex-row gap-2.5 items-center">
            <div className="text-sm">Work type</div>
            <div className="rounded-3xl cursor-pointer border border-black hover:bg-black bg-transparent hover:text-white py-2 px-4">
              Hourly
            </div>
            <div className="rounded-3xl cursor-pointer border border-black hover:bg-black bg-transparent hover:text-white py-2 px-4">
              Weekly
            </div>
            <div className="rounded-3xl cursor-pointer border border-black hover:bg-black bg-transparent hover:text-white py-2 px-4">
              Mouthly
            </div>
          </div>
          <div className="flex flex-row gap-2.5 items-center">
            <div className="text-sm">Level</div>
            <div className="rounded-3xl cursor-pointer border border-black hover:bg-black bg-transparent hover:text-white py-2 px-4">
              High
            </div>
            <div className="rounded-3xl cursor-pointer border border-black hover:bg-black bg-transparent hover:text-white py-2 px-4">
              Medium
            </div>
          </div>
          <div className="flex flex-row gap-2.5 items-center">
            <div className="text-sm">Size</div>
            <div className="rounded-3xl cursor-pointer border border-black hover:bg-black bg-transparent hover:text-white py-2 px-4">
              Large
            </div>
            <div className="rounded-3xl cursor-pointer border border-black hover:bg-black bg-transparent hover:text-white py-2 px-4">
              Medium
            </div>
            <div className="rounded-3xl cursor-pointer border border-black hover:bg-black bg-transparent hover:text-white py-2 px-4">
              Small
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 min-[425px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 pb-7">
        {persons.map((person) => (
          <div
            key={person.id}
            className={`rounded-xl border p-3 md:p-5 flex gap-3 md:gap-6 ${
              person.id % 2 === 0 ? 'flex-col' : 'flex-col md:flex-col-reverse'
            }`}
          >
            <div className="bg-imagebg flex justify-center bg-opacity-20 rounded-[10px] px-3.5 md:px-7 pt-4 md:pt-9">
              <Image
                src={person.images}
                width={224}
                height={270}
                className="w-32 md:w-56 h-[150px] md:h-[224px]"
                alt="person_image"
              />
            </div>
            <div className="flex flex-row items-center justify-between">
              <div>
                <div className="text-base md:text-xl font-medium text-black">
                  {person.name}
                </div>
                <div className="text-sm font-medium text-grey">
                  {person.role}
                </div>
              </div>
              <Image
                src="/images/redirect.svg"
                alt="redirect"
                onClick={() => router.push(`/resources/1`)}
                className="cursor-pointer absolute md:static top-4 right-4 w-4 h-4 md:h-6 md:w-6"
                width={24}
                height={24}
              />
            </div>
          </div>
        ))}
      </div>
      <SubscriptionSection />
    </div>
  )
}

export default Resources
