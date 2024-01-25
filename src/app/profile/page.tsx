import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
const Button = dynamic(() => import('@/components/Buttons/Button'))
const DetailForm = dynamic(
  () => import('@/components/Blocks/profile/DetailForm')
)

const Profile = async () => {
  // const data = await getData()

  
  return (
    <div className="pt-7 md:pt-14 pb-14 md:pb-28 relative">
      <div className="text-2xl md:text-4xl font-bold mb-11">Profile</div>
      <div className="flex flex-col lg:flex-row-reverse gap-6">
        <div>
          <div className="border flex flex-col gap-5 rounded-3xl justify-center items-center bg-white py-8 px-8 min-[425px]:px-20 md:px-[73px] lg:px-8 xl:px-[96px] w-full">
            <div className="text-2xl font-bold">Subscription</div>
            <div className="flex flex-col items-center">
              <div className="text-5xl md:text-8xl font-bold">$0.00</div>
              <div className="text-sm">
                To hire resource you have subscribe now
              </div>
            </div>
            <Button text="Subscribe" />
          </div>
        </div>
        <div className="flex flex-col gap-14 items-start flex-1">
          <DetailForm />
          <div className="flex flex-col gap-5 w-full flex-1">
            <div className="text-2xl font-bold">Your resources</div>
            <div className="rounded-xl w-full border p-3 md:p-5 flex gap-3 md:gap-6 flex-row items-center">
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
              <div className="flex flex-col">
                <div className="text-sm text-black font-medium">
                  To hire resource <span className="font-bold">subscribe</span>{' '}
                  to us or <span className="font-bold">contact us</span>
                </div>
                <div className="text-xs text-grey">No resources yet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
