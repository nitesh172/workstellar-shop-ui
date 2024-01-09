'use client'
import Button from '@/components/Buttons/Button'
import { DropDown } from '@/components/Dropdown/Dropdown'
import CheckBox from '@/components/Input/CheckBox'
import React from 'react'

const SubscriptionSection = () => {
  let option = [
    {
      name: 'Hourly',
      id: 11,
    },
  ]

  const list = [
    {
      name: 'Jacob Jones (Developer)',
      value: true,
    },
    {
      name: 'Annette Black (Developer)',
      value: false,
    },
    {
      name: 'Arlene McCoy (Designer)',
      value: false,
    },
    {
      name: 'Ralph Edwards (Designer)',
      value: true,
    },
    {
      name: 'Courtney Henry (Backend)',
      value: true,
    },
    {
      name: 'Jane Cooper (Backend)',
      value: true,
    },
    {
      name: 'Dianne Russell (Backend)',
      value: true,
    },
    {
      name: 'Kathryn Murphy (Backend)',
      value: true,
    },
    {
      name: 'Ronald Richards (Testing)',
      value: true,
    },
    {
      name: 'Dianne Russell (Backend)',
      value: true,
    },
    {
      name: 'Kathryn Murphy (Backend)',
      value: true,
    },
    {
      name: 'Ronald Richards (Testing)',
      value: true,
    },
    {
      name: 'Dianne Russell (Backend)',
      value: true,
    },
    {
      name: 'Kathryn Murphy (Backend)',
      value: true,
    },
    {
      name: 'Ronald Richards (Testing)',
      value: true,
    },
  ]
  return (
    <div id="Price" className="py-7 md:py-14">
      <div className='rounded-3xl flex flex-col items-start lg:items-center gap-4 xl:flex-row xl:gap-16 bg-[url("/images/subscription_bg_m.svg")] md:bg-[url("/images/subscription_bg_d.svg")] bg-no-repeat bg-cover py-8 px-6 md:p-9'>
        <div className="p-0 md:p-14 w-full lg:w-auto">
          <div className="flex flex-col gap-5 rounded-3xl justify-center items-center bg-white py-16 md:py-24 px-8 min-[425px]:px-20 md:px-[73px]">
            <div className="text-xl md:text-5xl font-bold">Subscription</div>
            <div className="flex flex-col items-center">
              <div className="text-5xl md:text-8xl font-bold">$20.12</div>
              <div className="text-sm">Price</div>
            </div>
            <Button text="Buy" dark />
          </div>
        </div>
        <div className="flex flex-1 w-full flex-col gap-4 md:gap-5">
          <DropDown
            availableOptionKey="name"
            label="Select work type"
            availableOptions={option}
            setOption={() => {}}
          />
          <div className="flex flex-col md:flex-row gap-4 md:gap-5">
            <DropDown
              availableOptionKey="name"
              label="Resources level"
              availableOptions={option}
              setOption={() => {}}
            />
            <DropDown
              availableOptionKey="name"
              label="Resources size"
              availableOptions={option}
              setOption={() => {}}
            />
          </div>
          <div className="rounded-2xl bg-white p-5">
            <div className="text-sm font-bold mb-4">Select Resources</div>
            <div className="max-h-64 flex flex-col gap-2 overflow-scroll">
              {list.map((person, index) => (
                <CheckBox key={index} id={`checkbox-${index}`} label={person.name} value={person.value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionSection
