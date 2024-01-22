'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
const Button = dynamic(() => import('@/components/Buttons/Button'))
const DropDown = dynamic(() => import('@/components/Dropdown/Dropdown'))
const TextField = dynamic(() => import('@/components/Input/TextField'))

const Profile = () => {
  let userType = [
    {
      name: 'Individual',
      id: 1,
    },
    {
      name: 'Company',
      id: 2,
    },
  ]
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
          <div className="rounded-3xl border p-5 md:p-10 w-full flex flex-col gap-10">
            <div className="text-2xl font-bold">Details</div>
            <div className="flex flex-col gap-6">
              <TextField
                label="Enter your email ID"
                placeholder="Johncooper@gmail.com"
              />
              <Button
                text="Update email ID"
                dark
                className="w-full min-[425px]:w-fit"
              />
              <DropDown
                availableOptionKey="name"
                primary
                isDisabled
                label="Select type"
                availableOptions={userType}
                setOption={() => {}}
              />
              <TextField label="Company name" placeholder="Vector Company" />
              <div className="flex flex-col xl:flex-row gap-6 w-full">
                <DropDown
                  availableOptionKey="name"
                  primary
                  label="Country"
                  availableOptions={userType}
                  setOption={() => {}}
                />
                <DropDown
                  availableOptionKey="name"
                  primary
                  label="State"
                  availableOptions={userType}
                  setOption={() => {}}
                />
              </div>
              <div className="flex flex-col xl:flex-row gap-6 w-full">
                <DropDown
                  availableOptionKey="name"
                  primary
                  className="flex-1"
                  label="State"
                  availableOptions={userType}
                  setOption={() => {}}
                />
                <TextField
                  label="Zipcode"
                  placeholder="10001"
                  className="flex-1"
                />
              </div>
            </div>
            <Button
              text="Save"
              dark
              className="w-full md:w-fit lg:w-full xl:w-fit"
            />
          </div>
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
